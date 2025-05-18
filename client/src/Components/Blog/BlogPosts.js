import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BlogPosts({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="blog-container">
      {posts.map(post => (
        <div key={post.id} className="blog-post-wrapper">
          <Link to={`/blog/${post.id}`} className="blog-post">
            <img src={`/${post.image}`} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-text">{post.content.substring(0, 100)}...</p>
            </div>
          </Link>

          {user?.is_admin && (
            <div className="blog-actions">
              <Link to={`/edit-post/${post.id}`} className="edit-button">Edit</Link>
              <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}