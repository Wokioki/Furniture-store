import React from 'react';
import sofa1 from '../../images/Shop/sofa 6.png';
import sofa2 from '../../images/Shop/sofa 8.png';
// додай інші картинки...

const products = [
  { id: 1, title: 'Modern sofa', price: 1220, image: sofa1 },
  { id: 2, title: 'Modern sofa', price: 1999, image: sofa2 },
  // ...додай решту
];

export default function ProductGrid() {
  return (
    <section className="product-grid">
      <div className="product-grid__header">
        <span>Showing 1–9 of 57 results</span>
        <select>
          <option>Sort by popularity</option>
          <option>Sort by price</option>
        </select>
        <input type="text" placeholder="Search..." />
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