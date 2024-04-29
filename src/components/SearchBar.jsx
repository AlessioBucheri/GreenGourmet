import React, { useState } from "react";

function SearchBar({ setSearchIngredient, onSearch }) {
  const [ingredient, setIngredient] = useState("");

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchIngredient(ingredient);
    onSearch();
  };

  return (
    <div className='search--bar'>
      <input
        className='search--input'
        type='text'
        placeholder='Type here your ingredient!'
        value={ingredient}
        onChange={handleInputChange}
      />
      <button className='search--button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
