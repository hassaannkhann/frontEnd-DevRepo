import React, { Component } from 'react';
import AddToCart from './AddToCart/AddToCart';
import MoreProducts from './MoreProducts/MoreProducts';
import PDPTitle from './PDPTitle/PDPTitle';
import ProdColorSwatches from './ProdColorSwatches/ColorAttr';
import ProductDesc from './ProductDesc/ProductDesc';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductSizeAttr from './ProductSizeAttr/ProductSizeAttr';

export class ProductDetailsWrap extends Component {
    render() {
        return (
            <div className="product-details">
                <PDPTitle/>
                <ProductPrice/>
                <ProductSizeAttr/>
                <ProdColorSwatches/>
                <AddToCart/>
                <ProductDesc/>
                <MoreProducts/>
            </div>
        )
    }
}

export default ProductDetailsWrap
