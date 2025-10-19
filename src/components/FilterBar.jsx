import React from 'react';

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

const FilterBar = ({ selectedClasses, onFilterChange }) => {
  const toggleClass = (cls) => {
    const newSelected = selectedClasses.includes(cls)
      ? selectedClasses.filter(c => c !== cls)
      : [...selectedClasses, cls];
    onFilterChange(newSelected);
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      <div className="filters">
        {classes.map(cls => (
          <label key={cls}>
            <input
              type="checkbox"
              checked={selectedClasses.includes(cls)}
              onChange={() => toggleClass(cls)}
            />
            {cls}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;