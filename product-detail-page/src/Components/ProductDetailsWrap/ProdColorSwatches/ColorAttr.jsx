import React, { Component } from "react";

export class ColorAttr extends Component {
  render() {
    return (
      <div className="variation-select-wrapper pd-ls">
        <span className="product-single__decs">Colors:</span>
        <div className="radio-box product-single__variation">
          <label className="color--red">
            <input type="radio" checked="checked" name="radio" />
          </label>
          <label className="color--green" id="green">
            <input type="radio" name="radio" />
          </label>
          <label className="color--blue" id="blue">
            <input type="radio" name="radio" />
          </label>
          <label className="color--orange" id="orange">
            <input type="radio" name="radio" />
          </label>
        </div>
      </div>
    );
  }
}

export default ColorAttr;
