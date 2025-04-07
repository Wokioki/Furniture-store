import React from 'react';

export default function Filters() {
  return (
    <aside className="filters">
      <div className="filters__block">
        <h4>Category</h4>
        <ul>
          <li>Ceiling (25)</li>
          <li>Floor (25)</li>
          <li>Led (25)</li>
          <li>Modern (25)</li>
          <li>Retro (25)</li>
          <li>Wood (25)</li>
        </ul>
      </div>

      <div className="filters__block">
        <h4>Color</h4>
        <ul>
          <li>Black (25)</li>
          <li>Blue (25)</li>
          <li>Red (25)</li>
          <li>Green (25)</li>
          <li>Yellow (25)</li>
          <li>Grey (25)</li>
        </ul>
      </div>

      <div className="filters__block">
        <h4>Price $100 - $800</h4>
        <input type="range" min="100" max="800" className="filters__range" />
        <button className="filters__button">Filter</button>
      </div>
    </aside>
  );
}
