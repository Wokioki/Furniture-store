import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import Filters from './Filters';
import Footer from '../Home/Footer';
import './shop.css'

export default function ShopPage({ user, setUser }) {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Download products from the database
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => {
        setProducts(res.data);
        const max = Math.max(...res.data.map(p => p.price));
        setMaxPrice(max);
      })
      .catch(err => console.error('Error loading products:', err));
  }, []);

  const maxAvailablePrice = Math.max(...products.map(p => p.price), 0);

  //  Filtration
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const matchPrice = product.price <= maxPrice;
    const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchColor && matchPrice && matchSearch;
  });


  //    HandeDelete
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
      setProducts(res.data);
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete product');
    }
  };


  // Pagination
  const productsPerPage = 9;
  const startIndex = (currentPage - 1) * productsPerPage;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Filter processing
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

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setMaxPrice(maxAvailablePrice);
    setCurrentPage(1);
  };

  return (
    <>
      <Header user={user} setUser={setUser} />
      <main className="shop-page">
      <div className="shop-page__content">
          <ProductGrid
            user={user}
            handleDelete={handleDelete}
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
            maxAvailablePrice={maxAvailablePrice}
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