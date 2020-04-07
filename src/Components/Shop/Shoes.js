import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllShoes } from "../../Redux/shoesReducer";

class Shoes extends Component {
  constructor() {
    super();
    this.state = {
      shoesList: [],
    };
  }
  componentDidMount() {
    this.props.getAllShoes()
  }
  render() {
    console.log(this.props.shoes.shoes)
    return <div></div>;
  }
}

const mapStateToProps = (reduxState) => ({ shoes: reduxState.shoes });

export default connect(mapStateToProps, { getAllShoes })(Shoes);
