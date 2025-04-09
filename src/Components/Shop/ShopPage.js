import React, { useState } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import Filters from './Filters';
import Footer from '../Home/Footer';
import { products } from './ProductGrid';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <>
      <Header />

      <main className="shop-page">
        <div className="shop-page__content">
        <ProductGrid 
            selectedCategory={selectedCategory} 
            selectedColor={selectedColor} />
        <Filters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            products={products}
          />
        </div>
        <Pagination />
      </main>

      <Footer />
    </>
  );
}