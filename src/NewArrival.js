import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import './NewArrival.css';

const NewArrival = () => {
  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('./products.json'); // Ensure the correct path
        const productData = response.data.filter((item) => item.id >= 9 && item.id <= 16);
        setNewArrival(productData);
      } catch (error) {
        console.error('Error fetching the product data', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="product2" className="py-5">
      <div className="container">
        <h2>New Arrivals</h2>
        <p style={{ textAlign: "center" }}>Winter Collection New Morden Design</p>
        <div className="row">
          {newArrival.map((product, index) => (
            <div key={index} className="col-md-3 mb-4 d-flex justify-content-center">
              <div className="card">
                <img src={product.img} alt={product.name} className="imgcard" />
                <div className="card-body">
                  <span className="text-muted">{product.brand}</span>
                  <h5 className="card-title">{product.name}</h5>
                  <div className="star mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-warning" />
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">${product.price}</h4>
                    <a href="/#" className="btn facts">
                      <FaCartPlus />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
