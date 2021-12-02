import React, { Component } from 'react'

export class ProductSizeAttr extends Component {
    render() {
        return (
            <div className="product--size pd-ls">
                <span className="defacto">Available Sizes:</span>
                <span>s</span>
                <span>m</span>
                <span>l</span>
                <span>xl</span>
            </div>
        )
    }
}

export default ProductSizeAttr
