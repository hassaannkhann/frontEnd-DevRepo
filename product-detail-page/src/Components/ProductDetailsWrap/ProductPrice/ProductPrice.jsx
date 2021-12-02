import React, { Component } from "react";

export class ProductPrice extends Component {
  render() {
    return (
      <div className="price-wrapper pd-ls">
        <span
          id="ProductPrice"
          className="product-single__price"
          itemprop="price"
          content="250"
        >
          AED 250
        </span>
      </div>
    );
  }
}

export default ProductPrice;
