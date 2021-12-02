import React, { Component } from "react";
import PDPFeatureImg from "../PDPFeatureImg/PDPFeatureImg";
import ProductDetailsWrap from "../ProductDetailsWrap/ProductDetailsWrap";

export class PDPwrap extends Component {
  render() {
    return (
      <div id="section-template" className="product-template">
        <div className="product-single">
          <div className="product-box">
            <div className="box-wrapper">
              <div className="product-grid">
                <PDPFeatureImg/>
                <ProductDetailsWrap/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PDPwrap;
