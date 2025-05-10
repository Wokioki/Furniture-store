import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';


export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  
  const handleAdd = () => {
    addToCart(product, quantity);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id || isNaN(Number(id))) {
      navigate('/shop');
      return;
    }
    axios.get(`/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        fetchRelated(res.data);
      })
      .catch(() => navigate('/shop'));
  }, [id, navigate]);

  const fetchRelated = (currentProduct) => {
    axios.get('/api/products')
      .then(res => {
        const filtered = res.data
          .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
          .slice(0, 4);
        setRelated(filtered);
      });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
        <div className="back-button">
            <Link to="/shop">← Back to shop</Link>
        </div>
      <div className="product-main">
        <div className="product-image-large">
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => e.target.src = "/images/placeholder.jpg"}
        />
        </div>
        <div className="product-info">
          <h2>Sofa code {product.id}</h2>
          <p className="product-price">${Number(product.price).toFixed(2)}</p>
          <p className="product-desc">
            Modern Comfort Sofa – where style meets relaxation. Crafted with premium fabric and a solid wood frame...
          </p>

          <div className="product-actions">
            <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
            <button className="add-to-cart" onClick={handleAdd}>Add to cart</button>
          </div>
        </div>
      </div>

        <h3>Related products</h3>
        <div className="related-products">
            {related.map(p => (
                <Link key={p.id} to={`/shop/${p.id}`} className="related-card">
                    <img src={p.image} alt={p.title} />
                    <p>{p.title}</p>
                    <span>${Number(p.price).toFixed(2)}</span>
                </Link>
            ))}
        </div>
    </div>
  );
}