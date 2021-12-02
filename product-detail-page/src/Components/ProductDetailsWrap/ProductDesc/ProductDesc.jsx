import React, { Component } from "react";

export class ProductDesc extends Component {
  render() {
    return (
      <div className="product-single__description product-single__description--full-width pd-ls">
        <div className="description-wrapper">
          <h4 className="description-head">Description</h4>
          <div className="description-text__main">
            <p className="small">
              Opt for a bold look with this T-Shirt. With this iconic tiger
              print on the chest, it is sure to turn heads. Pair it with jogging
              trousers and sneakers for a casual sportswear look.
            </p>
            <span>Short sleeved T-Shirt.</span>
            <span>Round Neck.</span>
            <span>Tiger embroidered on the chest.</span>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default ProductDesc;
