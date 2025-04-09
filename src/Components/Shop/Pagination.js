import React from 'react';

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button key={page} className="pagination__button">
          {page}
        </button>
      ))}
      <button className="pagination__button">›</button>
    </div>
  );
}