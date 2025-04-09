import React from 'react';

export default function Filters({ 
    setSelectedCategory,
    setSelectedColor,
    products }) {


  const categories = ["Ceiling", "Floor", "Led", "Modern", "Retro", "Wood"];
  const colors = ["Black", "Blue", "Red", "Green", "Yellow", "Grey"];

    const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = products.filter(p => p.category === cat).length;
    return acc;
  }, {});

  const colorCounts = colors.reduce((acc, color) => {
    acc[color] = products.filter(p => p.color === color).length;
    return acc;
  }, {});
        
  return (
    <aside className="filters">
      <div className="filters__block">
        <h4>Category</h4>
        <ul>
          {categories.map((cat) => (
            <li key={cat} onClick={() => setSelectedCategory(cat)}>
              {cat} ({categoryCounts[cat] || 0})
            </li>
          ))}
        </ul>
      </div>
  
      <div className="filters__block">
        <h4>Color</h4>
        <ul>
          {colors.map((color) => (
            <li key={color} onClick={() => setSelectedColor(color)}>
              {color} ({colorCounts[color] || 0})
            </li>
          ))}
        </ul>
      </div>
  
      <div className="filters__block">
        <h4>Price $1000 - $5000</h4>
        <input type="range" min="100" max="800" className="filters__range" />
      </div>
    </aside>
  );
}