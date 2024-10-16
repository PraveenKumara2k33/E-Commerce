import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import CustomerReview from './CustomerReview';
import SimilarProducts from './SimilarProducts';
import ProductComparison from './ProductComparison';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Adjust the path if needed
        const response = await axios.get('/products.json'); 
        const productData = response.data.find(p => p.id === parseInt(id));
        setProduct(productData);

        if (productData) {
          const similarProductsData = response.data.filter(p => p.identifier === productData.identifier && p.id !== productData.id);
          setSimilarProducts(similarProductsData);
        }
      } catch (error) {
        console.error('Error fetching the product data', error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      // Log product image paths to console
      console.log('Main Product Image:', product.img);
      product.subImages.forEach((image, index) => {
        console.log(`Sub Image ${index}: ${image}`);
      });
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const reviews = [
    { title: 'Great product', body: 'I loved this product!', author: 'John Doe' },
    { title: 'Not bad', body: 'It is decent for the price.', author: 'Jane Smith' },
  ];

  const productsForComparison = [product, ...similarProducts];

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <ProductCard product={product} />
          <ProductDetails product={product} />
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="card">
              <div className="card-header bg-white">
                <h4>Description</h4>
              </div>
              <div className="card-body">
                <p>{product.description || 'No description available.'}</p>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts products={similarProducts} />
        <ProductComparison products={productsForComparison} />
        <CustomerReview reviews={reviews} />
      </div>
    </div>
  );
};

export default ProductPage;
