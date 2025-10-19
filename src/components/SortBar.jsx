import React from 'react';

const SortBar = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;