import React from "react";
import "./product.css";
import ImageLoader from '../../utils/imageLoader.js';
function Product ({product}) {

    const productImage = ImageLoader(product.image);

    return (
      <>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="product-card shadow">
            <img src={productImage} alt={product.productName} />
            <h1 className="product-name">{product.productName}</h1>
            <h3 className="price">{product.price} VND</h3>
            <a className="buy-now" href={product.link}>
              Mua ngay
            </a>
          </div>
        </div>
      </>
    );
}

export default Product;