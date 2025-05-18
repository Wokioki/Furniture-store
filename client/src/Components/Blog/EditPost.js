import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditPost({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.is_admin) {
      alert('Access denied');
      navigate('/blog');
    }
  }, [user, navigate]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then(res => {
        const post = res.data;
        setTitle(post.title);
        setContent(post.content);
        setImage(post.image);
      })
      .catch(() => {
        alert('Post not found');
        navigate('/blog');
      });
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
        title,
        content,
        image
      });
      navigate('/blog');
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update post');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label><br />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="6" required />
        </div>
        <div>
          <label>Image path:</label><br />
          <input value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}