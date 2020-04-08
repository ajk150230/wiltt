import React, { Component } from "react";

export default class Product extends Component {
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
            <button>Add to Cart</button>
          </section>
            <button className='cancel' onClick={cancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
