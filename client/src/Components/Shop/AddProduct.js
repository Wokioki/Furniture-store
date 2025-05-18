import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/products`, {
        title,
        price: Number(price),
        image,
        category,
        color
      });
      navigate('/shop');
    } catch (err) {
      alert('Error adding product');
    }
  };

  return (
    <div className="add-post-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <input placeholder="Image path (e.g. images/shop/sofa.jpg)" value={image} onChange={e => setImage(e.target.value)} required />
        <select value={category} onChange={e => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Ceiling">Ceiling</option>
            <option value="Floor">Floor</option>
            <option value="Led">Led</option>
            <option value="Modern">Modern</option>
            <option value="Retro">Retro</option>
            <option value="Wood">Wood</option>
        </select>

        <select value={color} onChange={e => setColor(e.target.value)} required>
            <option value="">Select Color</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Grey">Grey</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}