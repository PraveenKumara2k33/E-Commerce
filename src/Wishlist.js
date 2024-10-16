import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const handleRemove = (index) => {
    const updatedWishlistItems = wishlistItems.filter((item, i) => i !== index);
    setWishlistItems(updatedWishlistItems);
  };

  const handleBuy = (id) => {
    navigate(`/product/${id}`);
  };

  const aggregatedWishlistItems = wishlistItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (!existingItem) {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <div className="container py-5">
      <h2>Wishlist</h2>
      {aggregatedWishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {aggregatedWishlistItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">${item.price}</p>
                  <button className="btn btn-primary" onClick={() => handleBuy(item.id)}>Buy</button>
                  <button className="btn btn-danger mt-2" onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
