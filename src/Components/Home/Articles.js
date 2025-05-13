import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Articles() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get('/api/posts')
      .then(res => {
        if (Array.isArray(res.data)) {
          const latestPosts = res.data.slice(0, 2);
          setPosts(latestPosts);
        }
      })
      .catch(err => console.error('Error fetching articles:', err));
  }, []);

  return (
    <section className="articles">
      {posts.map(post => (
        <div className="article" key={post.id}>
          <img src={`/${post.image}`} alt={post.title} />
          <p className="article__date">{new Date(post.date).toLocaleDateString()} / by ai</p>
          <h4>{post.title}</h4>
          <Link to={`/blog/${post.id}`}>read more</Link>
        </div>
      ))}
    </section>
  );
}