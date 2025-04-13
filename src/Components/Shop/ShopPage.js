import React, { useState } from 'react';
import Header from './Header';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import Filters from './Filters';
import Footer from '../Home/Footer';
import { products } from './ProductData';

export default function ShopPage() {
  //Filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Price
  const maxAvailablePrice = Math.max(...products.map(p => p.price));
  const [maxPrice, setMaxPrice] = useState(maxAvailablePrice);
  // Search term
  const [searchTerm, setSearchTerm] = useState('');

  // Product filter
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchPrice = product.price <= maxPrice;
    const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
  
    return matchCategory && matchColor && matchPrice && matchSearch;
  });
  // Pagination
  const productsPerPage = 9;
  const startIndex = (currentPage - 1) * productsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  //Choose filters
  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  
  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };


  // Filter resert
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setMaxPrice(maxAvailablePrice);
    setCurrentPage(1);
  };
  
  return (
    <>
      <Header />

      <main className="shop-page">
        <div className="shop-page__content">
        <ProductGrid 
            products={paginatedProducts}
            total={filteredProducts.length}
            startIndex={startIndex}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />
        <Filters
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            selectedColors={selectedColors}
            toggleColor={toggleColor}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            products={products}
            resetFilters={resetFilters}
          />
        </div>
        <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
      </main>
      
        <Footer />
    </>
  );
}