import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setProducts(res.data.slice(0, 3));
        } else {
          console.error('API returned not an array:', res.data);
        }
      })
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