import React, { Component } from 'react';
import FeaturedImg from '../../Assets/product-image.webp';

export class PDPFeatureImg extends Component {
    render() {
        return (
            <div className="product-photos grid-item">
                <div className="product-single__photos">
                    <div className="product-single-wrapper">
                        <div className="product-single--photo">
                            <div id="featured-image-877">
                                <img className="product-single__photo image product-single__photo-877" src={FeaturedImg} alt="Featured"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PDPFeatureImg
