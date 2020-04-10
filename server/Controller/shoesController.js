module.exports = {
  getAllShoes: function (req, res) {
    const db = req.app.get("db");
      db.shoes
        .getAllShoes()
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
  },
  addToCart: function (req, res){
      const {currentUser} = req.session
      const {shoes_id} = req.params
      console.log(shoes_id)
      const db = req.app.get("db")
      db.shoes
        .getItem(shoes_id)
        .then((data)=>{
            console.log(req.session)
            currentUser.cart.push(data[0])
            currentUser.total += data[0].price
            console.log(currentUser.cart)
            res.status(200).send(currentUser)
        })
        .catch(error => console.error(error))
  },
  deleteCart: function (req, res){
      const {shoes_id} = req.params 
      const {currentUser} = req.session

      const target = currentUser.cart.findIndex(shoe=> shoe.shoes_id == shoes_id)
      if(target !== -1){
          currentUser.cart.splice(target, 1)
          currentUser.total -= data.price
      }
  },
  getOrder: function (req, res){
    const db = req.app.get("db");
    const {user_id} = req.session.currentUser
    db.getOrder(user_id)
        .then(order=>{
            console.log(order)
            res.status(200).send(order)
        })
        .catch(err =>{
            console.error(err)
            res.sendStatus(500)
        })
  },
  deleteOrder: function (req, res){
    const db = req.app.get("db");
    const orders_id = req.params.orders_id
    console.log(orders_id)
    db.deleteOrder(orders_id)
        .then(response=>{
            res.status(200).send(response)
        })
        .catch(error=>{
            console.log(error)
            res.status(409).json("youre done")
        })
  }
};
