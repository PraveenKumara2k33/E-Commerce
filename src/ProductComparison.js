import React from 'react';

const ProductComparison = ({ products }) => (
  <div className="row mt-5">
    <div className="col-md-12">
      <h4>Product Comparison</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Product</th>
              {products.map((product, index) => (
                <th key={index}>{product.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {products.map((product, index) => (
                <td key={index}>
                  <div className="d-flex justify-content-between">
                    <span className="selling-price">${product.price}</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td>Description</td>
              {products.map((product, index) => (
                <td key={index}>{product.description}</td>
              ))}
            </tr>
            <tr>
              <td>Rating</td>
              {products.map((product, index) => (
                <td key={index}>{product.stars || 'N/A'}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ProductComparison;
