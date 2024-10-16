import React from 'react';

const SimilarProducts = ({ products }) => (
  <div className="row mt-5">
    <div className="col-md-12">
      <h4>Similar Products</h4>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between">
                  <span className="selling-price">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SimilarProducts;
