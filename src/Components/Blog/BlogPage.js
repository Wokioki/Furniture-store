import React from 'react';
import { Link } from 'react-router-dom'
import Header from './BlogHeader';
import BlogPosts from './BlogPosts';


function BlogPage({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      {user?.is_admin && (
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
          <Link to="/admin/add-post" className="add-post-link">+ Add New Post</Link>
        </div>
      )}
      <BlogPosts user={user} />
    </>
  );
}

export default BlogPage;