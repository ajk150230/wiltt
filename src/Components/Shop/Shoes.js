import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllShoes } from "../../Redux/shoesReducer";
import {TimelineLite} from 'gsap'
import Product from "./Product";

class Shoes extends Component {
  constructor() {
    super();
    // this.myTween = new TimelineLite({paused: true});
    this.state = {
      shoesList: [],
      open: false,
      brand: "",
      name: "",
      price: "",
      id: '',
      img: ''
    };
  }
  //fkgjfkgfdfdfdfdxczxcsdasdrgdfgsdsd
  //dfdfdfsdfs
  componentDidMount() {
    this.props.getAllShoes()
    this.setState({shoesList: this.props.shoes.shoes})
    console.log(this.state.shoesList)
    // this.myTween.staggerTo(this.props.shoes.shoes, 0.5, {y: 0, autoAlpha: 1}, 0.1);
  }
  handleClick = (brand, name, price, id, img) => {
    this.setState({
      open: !this.state.open,
      brand: brand,
      name: name,
      price: price,
      id: id,
      img: img
    });
  };
  toggle=()=>{
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const shoes = this.props.shoes.shoes.map((element, index) => {
      return (
        <div className="product">
          <div
            className="product-picture"
            key={index}
            // ref={div => this.props.shoes.shoes[index] = div}
            style={{ backgroundImage: `url(${element.img_url})` }}
            onClick={() =>
              this.handleClick(
                element.brand,
                element.name,
                element.price,
                element.shoes_id,
                element.img_url
              )
            }
          ></div>
          <div className="product-name">{element.name}</div>
        </div>
      );
    });
    return (
      <div className="shop">
        <main className="main">{shoes}</main>
        {this.state.open ? (
          <Product
            brand={this.state.brand}
            name={this.state.name}
            price={this.state.price}
            id={this.state.id}
            img={this.state.img}
            cancel={this.toggle}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({ shoes: reduxState.shoes });

export default connect(mapStateToProps, { getAllShoes })(Shoes);
