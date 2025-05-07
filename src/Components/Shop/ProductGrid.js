import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductGrid({ 
  products, 
  total,
  searchTerm,
  setSearchTerm,
  startIndex,
  user,
  handleDelete }) {


  return (
    <section className="product-grid">
      <div className="product-grid__header">
      <span>
        Showing {startIndex + 1}–{startIndex + products.length} of {total} results
      </span>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
        {user?.is_admin && (
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <Link to="/admin/add-product" className="add-post-link">+ Add New Product</Link>
        </div>
        )}
      <div className="product-grid__list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${Number(product.price).toFixed(2)}</p>

            {user?.is_admin && (
              <div style={{ marginTop: '10px' }}>
                <Link to={`/admin/edit-product/${product.id}`} className="edit-button">
                  Edit
                </Link>
                <button onClick={() => handleDelete(product.id)} className="delete-button">
                  Delete
                </button>
              </div>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}