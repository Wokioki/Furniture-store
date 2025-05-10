import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data.slice(0, 3))) 
      .catch(err => console.error('Error fetching featured products:', err));
  }, []);

  return (
    <section className="products">
      <h2 className="products__title">Products of the week</h2>
      <div className="products__list">
        {products.map(product => (
          <Link to={`/shop/${product.id}`} className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${Number(product.price).toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}