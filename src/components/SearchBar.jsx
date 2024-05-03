import React from "react";
import "./SearchBar.css";

function SearchBar({ ingredient, setIngredient, handleSearch }) {
  return (
    <div className='search--bar'>
      <input
        className='search--input'
        type='text'
        placeholder='Type here your ingredient!'
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button className='search--button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
