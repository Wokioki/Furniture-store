import React from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import Filters from './Filters';
import Footer from './Footer';

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="shop-page">
        <div className="shop-page__content">
          <ProductGrid />
          <Filters />
        </div>
      </main>

      <Footer />
    </>
  );
}