import React, { Component } from "react";
import ProductImg1 from '../../../Assets/prod-1.jpg'
import ProductImg2 from '../../../Assets/prod-2.jpg'
import ProductImg3 from '../../../Assets/prod-3.jpg'
import ProductImg4 from '../../../Assets/prod-4.jpg'

export class MoreProducts extends Component {
  render() {
    return (
      <div className="product-single__more-prod pd-ls">
        <div className="more-product--wrapper">
          <h4 className="description-head">See more products</h4>
          <div className="products-list--main">
            <ul className="products-list">
              <li className="product-list-item">
                <a href="/Test" className="product-link">
                  <img src={ProductImg1} alt="prod-n" />
                </a>
              </li>
              <li className="product-list-item">
                <a href="/Test" className="product-link">
                  <img src={ProductImg2} alt="prod-n" />
                </a>
              </li>
              <li className="product-list-item">
                <a href="/Remote" className="product-link">
                  <img src={ProductImg3} alt="prod-n" />
                </a>
              </li>
              <li className="product-list-item">
                <a href="Remote" className="product-link">
                  <img src={ProductImg4} alt="prod-n" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreProducts;
