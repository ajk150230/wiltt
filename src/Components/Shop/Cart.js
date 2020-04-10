import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession, checkOut } from "../../Redux/userReducer";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    this.props.getSession();
  }
  handleToken = (token) => {
    const order = { price: this.props.shoes.total };
    //  axios.post('/api/stripe', {token, order}).then(data=>{console.log(data)})
    this.props.checkOut(token, order);
  };
  render() {
    console.log(this.props.shoes);
    const map = this.props.shoes.cart.map((element) => {
      return (
        <div className='chart-profile'>
          <div 
          className='chart-shoes'
          style={{ backgroundImage: `url(${element.img_url})` }}></div>
          <div>{element.brand}</div>
          <div>{element.name}</div>
          <div>${element.price}</div>
          <button>Remove</button>
        </div>
      );
    });
    return (
      <div>
        <div className='cart'>{map}</div>
        Total: ${this.props.shoes.total}
        <StripeCheckout
          stripeKey="pk_test_wqcyw6NW7gBRaodTMxXRuYHt00IlLh4cX4"
          token={this.handleToken}
          billingAddress
          shippingAddress
          amount={this.props.shoes.total * 100}
        />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  shoes: reduxState.shoes,
});

export default connect(mapStateToProps, { getSession, checkOut })(Cart);
