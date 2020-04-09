import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession } from "../../Redux/shoesReducer";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }
  componentDidMount() {
    this.props.getSession()
  }
 handleToken=(token)=>{
     const order = {price: this.props.shoes.total}
     axios.post('/api/stripe', {token, order}).then(data=>{console.log(data)})
  }
  render() {
    console.log(this.props.shoes);
    const map = this.props.shoes.cart.map((element) => {
      return (
        <div>
          <div>{element.brand}</div>
          <div>{element.name}</div>
          <div>{element.price}</div>
          <button>Remove</button>
        </div>
      );
    });
    return (
      <div>
        <div>{map}</div>
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
  shoes: reduxState.shoes
});

export default connect(mapStateToProps, { getSession })(Cart);
