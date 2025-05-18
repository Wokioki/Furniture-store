import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './blog.css';

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(() => setPost(null));
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <div style={{ padding: '100px', textAlign: 'center' }}>Post not found</div>;

  return (
    <div className="blog-details">
      <Link to="/blog" className="back-button">← Back to blog</Link>
      <img src={`/${post.image}`} alt={post.title} className="blog-details__image" />
      <div className="blog-details__content">
        <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-text">{post.content}</p>
      </div>
    </div>
  );
}