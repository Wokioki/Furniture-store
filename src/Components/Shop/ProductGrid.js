import React from 'react';



export default function ProductGrid({ 
  products, 
  total,
  searchTerm,
  setSearchTerm,
  startIndex }) {


  return (
    <section className="product-grid">
      <div className="product-grid__header">
      <span>
        Showing {startIndex + 1}–{startIndex + products.length} of {total} results
      </span>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="product-grid__list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}