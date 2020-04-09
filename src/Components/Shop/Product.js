import React, { Component } from "react";
import {connect} from "react-redux"
import { addToCart } from '../../Redux/shoesReducer'


class Product extends Component {
    addToCart=(shoes_id)=>{
        console.log(shoes_id)
        this.props.addToCart(shoes_id)
    }
  render() {
    const { brand, name, price, id, img, cancel } = this.props;
    return (
      <div className="modal" >
        <div className="modal-content">
          <section
            className="shoe-picture"
            style={{ backgroundImage: `url(${img})` }}
          >
          </section>
          <section className="info">
            <p>{brand}</p>
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={()=>this.addToCart(id)}>Add to Cart</button>
            <button className='cancel' onClick={cancel}>Cancel</button>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({ shoes: reduxState.shoes });

export default connect(mapStateToProps, { addToCart })(Product);
