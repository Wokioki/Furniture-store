import React from 'react';

export default function Filters({ 
    selectedCategories,
    toggleCategory,
    selectedColors,
    toggleColor,
    maxPrice,
    setMaxPrice,
    resetFilters,
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
            <li key={cat} onClick={() => toggleCategory(cat)}
            className={selectedCategories.includes(cat) ? 'active-filter' : ''}
            >
              {cat} ({categoryCounts[cat] || 0})
            </li>
          ))}
        </ul>
      </div>
  
      <div className="filters__block">
        <h4>Color</h4>
        <ul>
          {colors.map((color) => (
            <li key={color} onClick={() => toggleColor(color)}
            className={selectedColors.includes(color) ? 'active-filter' : ''}
            >
              {color} ({colorCounts[color] || 0})
            </li>
          ))}
        </ul>
      </div>
  
      <div className="filters__block">
        <h4>Price $0 - ${maxPrice}</h4>
        <input
          type="range"
          min="0"
          max={Math.max(...products.map(p => p.price))} 
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="filters__range"
        />
        <button className="filters__button"
        onClick={resetFilters}>
            Reset
        </button>
      </div>
    </aside>
  );
}