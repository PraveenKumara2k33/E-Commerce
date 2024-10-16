import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Feature from './Feature';
import Product from './Product';
import ProductPage from './ProductPage';
import Banner from './Banner';
import NewArrival from './NewArrival';
import DealsOffer from './DealsOffer';
import Newsletter from './Newsletter';
import Footer from './Footer';
import Cart from './Cart';
import Wishlist from './Wishlist';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Feature />
            <Product />
            <Banner />
            <NewArrival />
            <DealsOffer />
            <Newsletter />
          </>} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
