import React, { Component } from "react";

export class AddToCart extends Component {
  render() {
    return (
      <div className="product-single__add-to-cart product-single__add-to-cart--full-width pd-ls">
        <button
          type="submit"
          name="add"
          id="AddToCart--product-template"
          className="btn btn--buy btn--add-to-cart"
        >
          <span className="btn__text">
            <span className="btn__add-to-cart-text">Add to Cart</span>
          </span>
        </button>
      </div>
    );
  }
}

export default AddToCart;
