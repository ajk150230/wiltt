import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession, editAddress, deleteOrder } from "../Redux/userReducer";
import { Redirect } from "react-router-dom";
import axios from "axios";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
      address: "",
    };
  }
  componentDidMount() {
    this.props.getSession();
    axios
      .get("/api/order")
      .then((data) => {
        this.setState({ order: data.data });
      })
      .catch((err) => console.error(err));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    const { address } = this.state;
    this.props.editAddress(address)
  };
  handleDelete = (orders_id) =>{
      this.props.deleteOrder(orders_id)
  }
  render() {
    const { firstname, address } = this.props.user;
    const map = this.state.order.map((element) => {
      return (
        <div className="orders">
          <h2>Order#:{element.orders_id}</h2>
          <h2>Ordered by: {element.first}</h2>
          <h2>Total: {element.price}</h2>
          <h2>Delivering to: {element.address}</h2>
          <button onClick={()=>this.handleDelete(element.orders_id)}>Cancel Order</button>
        </div>
      );
    });
    console.log(this.props);
    if (!this.props.user.user_id) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="profile" className='user-profile'>
        {console.log(this.state.order)}
        <div>
          <h1>Profile</h1>
          <h2>Name: {firstname}</h2>
          <h2>Address: {address}</h2>
          <input
            name="address"
            onChange={this.handleChange}
            placeholder="New Address"
          />
          <button onClick={this.handleClick}>Change Address</button>
        </div>
        <div className='line'></div>
        <h2>Orders</h2>
        {map}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession, editAddress, deleteOrder })(Profile);
