import React from 'react';
import sofa1 from '../../images/Shop/sofa.jpg';
import sofa2 from '../../images/Shop/sofa2.jpg';
import sofa3 from '../../images/Shop/sofa3.jpg';
import sofa4 from '../../images/Shop/sofa4.jpg';
import sofa5 from '../../images/Shop/sofa5.jpg';
import sofa6 from '../../images/Shop/sofa 6.png';
import sofa7 from '../../images/Shop/sofa 7.png';
import sofa8 from '../../images/Shop/sofa 8.png';
import sofa9 from '../../images/Shop/sofa 9.png';

export const products = [
  { id: 1, title: 'Modern sofa', price: 1220, image: sofa1, category: 'Retro', color: 'Red'},
  { id: 2, title: 'Modern sofa', price: 1999, image: sofa2, category: 'Retro', color: 'Black' },
  { id: 3, title: 'Modern sofa', price: 1250, image: sofa3, category: 'Modern', color: 'Grey' },
  { id: 4, title: 'Modern sofa', price: 3099, image: sofa4, category: 'Led', color: 'Blue' },
  { id: 5, title: 'Modern sofa', price: 1980, image: sofa5, category: 'Floor', color: 'Green' },
  { id: 6, title: 'Modern sofa', price: 5999, image: sofa6, category: 'Ceiling', color: 'Yellow' },
  { id: 7, title: 'Modern sofa', price: 3999, image: sofa7, category: 'Wood', color: 'Green' },
  { id: 8, title: 'Modern sofa', price: 2999, image: sofa8, category: 'Wood', color: 'Blue'},
  { id: 9, title: 'Modern sofa', price: 2899, image: sofa9, category: 'Modern', color: 'Red' },
];

export default function ProductGrid({ selectedCategory, selectedColor }) {
  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchColor = selectedColor ? product.color === selectedColor : true;
    return matchCategory || matchColor;
  });

  
  
    return (
    <section className="product-grid">
      <div className="product-grid__header">
        <span>Showing {filteredProducts.length} of {products.length} results</span>
        <select>
          <option>Sort by popularity</option>
          <option>Sort by price</option>
        </select>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="product-grid__list">
        {filteredProducts.map((product) => (
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