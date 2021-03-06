const express = require('express')
const cors = require("cors");
const uuid = require("uuid/v4");
const massive = require('massive')
const session = require('express-session')
const dotenv = require('dotenv')
const {register, login, getSession, createSession, editAddress} = require('./Controller/authController')
const {getAllShoes, addToCart, getOrder, deleteOrder} = require('./Controller/shoesController')
dotenv.config()
const stripe = require("stripe")(`${process.env.STRIPE_KEY}`);
const app = express()

app.use(express.json())
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db is connected')
    })

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET
    })
)
app.post("/auth/register", register)
app.post("/auth/login", login)
app.get("/auth/user", getSession)
app.get("/auth/session", createSession)

app.get("/api/shoes", getAllShoes)
app.post("/api/shoes/:shoes_id", addToCart)
const stripeCheckout = async (req, res) => {
    console.log("Request:", req.body);
    const db = req.app.get("db");
    let error;
    let status;
    try {
      const { order, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotencyKey = uuid();
      const charge = await stripe.charges.create(
        {
          amount: order.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotencyKey
        }
      );
    //   console.log("Charge:", { charge });
      status = "success";
        db.createOrder([req.session.currentUser.user_id, order.price]).then(data=>{req.session.currentUser.cart=[]
        })
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    req.session.currentUser.cart=[]
    req.session.currentUser.total=0
    res.status(200).send(req.session.currentUser)
  }
app.post("/api/stripe", stripeCheckout)
app.get("/api/order", getOrder)
app.put("/auth/user", editAddress)
app.delete("/api/order/:orders_id", deleteOrder)

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT} `)) 