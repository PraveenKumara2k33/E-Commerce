import React, { useState } from 'react';
import './ProductPage.css';

const ProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.subImages[0]);

  return (
    <div className="col-md-5 mt-3">
      <div className="image-container bg-white d-flex align-items-center justify-content-center">
        <img src={mainImage} className="main-image" alt="Product" />
      </div>
      <div className="d-flex mt-3">
        {product.subImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className="img-thumbnail me-2"
            alt="Thumbnail"
            onClick={() => setMainImage(image)}
            style={{ cursor: 'pointer', width: '60px', height: '60px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
