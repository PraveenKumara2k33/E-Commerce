import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaCartPlus } from 'react-icons/fa';
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('./products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the product data', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section id="product1" className="py-5">
      <div className="container">
        <h2 style={{ textAlign: "center", fontSize: '46px', color: '#222', lineHeight: '54px' }}>Feel Free</h2>
        <p style={{ textAlign: "center" }}>Summer Collection New Modern Design</p>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4" onClick={() => handleProductClick(product.id)}>
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
                    <h4 className="mb-0" style={{ color: "#088178", fontWeight: '700', fontSize: '20px' }}>${product.price}</h4>
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

export default Product;
