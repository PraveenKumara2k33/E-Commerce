import React from 'react';

const CustomerReview = ({ reviews }) => (
  <div className="row mt-5">
    <div className="col-md-12">
      <h4>Customer Reviews</h4>
      {reviews.map((review, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{review.title}</h5>
            <p className="card-text">{review.body}</p>
            <p className="card-text"><small className="text-muted">By {review.author}</small></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CustomerReview;
