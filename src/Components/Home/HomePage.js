import React from 'react';
import Header from './Header';
import Products from './Product';
import CTA from './Offer';
import Features from './Features';
import Articles from './Articles';
import Quote from './Quote';
import Footer from './Footer';
import '../../index.css';

function HomePage({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
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