import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [deliveryInfo, setDeliveryInfo] = useState({ name: '', address: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleCheckout = () => {
    console.log('Delivery Info:', deliveryInfo);
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    navigate('/');
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedCartItems = cartItems.map((item, i) => {
      if (i === index) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const aggregatedCartItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  return (
    <div className="container py-5">
      <h2>Shopping Cart</h2>
      {aggregatedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {aggregatedCartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    ${item.price} x {item.quantity} = ${item.price * item.quantity}
                  </p>
                  <div className="input-group">
                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <input
                      type="text"
                      className="form-control text-center"
                      value={item.quantity}
                      readOnly
                    />
                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                  <button className="btn btn-danger mt-2" onClick={() => handleRemove(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {aggregatedCartItems.length > 0 && (
        <div className="mt-4">
          <h3>Delivery Information</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={deliveryInfo.name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" name="address" value={deliveryInfo.address} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" value={deliveryInfo.phone} onChange={handleInputChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
