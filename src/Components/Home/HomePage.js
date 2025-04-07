import React from 'react';
import '../../index.css';
import Header from './Header';
import Products from './Product';
import CTA from './Offer';
import Features from './Features';
import Articles from './Articles';
import Quote from './Quote';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Products />
      <CTA />
      <Features />
      <Articles />
      <Quote />
      <Footer />
    </>
  );
}

export default HomePage;