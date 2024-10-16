import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductPage.css';

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/cart');
  };

  const handleAddToWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingItemIndex = wishlistItems.findIndex(item => item.id === product.id);

    if (existingItemIndex === -1) {
      wishlistItems.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    navigate('/wishlist');
  };

  return (
    <div className="col-md-7 mt-3">
      <div className="product-view">
        <h4 className="product-name">
          {product.name}
          <label className="label-stock bg-success">In Stock</label>
        </h4>
        <hr />
        <div>
          <span className="selling-price">${product.price}</span>
        </div>
        <div className="mt-2">
          <button className="btn btn1" onClick={handleAddToCart}><i className="fa fa-shopping-cart"></i> Add To Cart</button>
          <button className="btn btn1" onClick={handleAddToWishlist}><i className="fa fa-heart"></i> Add To Wishlist</button>
        </div>
        <div className="mt-3">
          <h5 className="mb-0">Small Description</h5>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
