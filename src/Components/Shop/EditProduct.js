import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => alert('Product not found'));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, product);
      navigate('/shop');
    } catch {
      alert('Error updating product');
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="add-post-form">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={product.title} onChange={handleChange} required />
        <input name="price" type="number" value={product.price} onChange={handleChange} required />
        <input name="image" value={product.image} onChange={handleChange} required />
        <select name="category" value={product.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Ceiling">Ceiling</option>
          <option value="Floor">Floor</option>
          <option value="Led">Led</option>
          <option value="Modern">Modern</option>
          <option value="Retro">Retro</option>
          <option value="Wood">Wood</option>
        </select>
        <select name="color" value={product.color} onChange={handleChange} required>
          <option value="">Select Color</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Grey">Grey</option>
        </select>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}