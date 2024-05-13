import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ ingredient, setIngredient, handleSearch }) {
  const [isLoading, setIsLoading] = useState(false);

  const searchAnHandleLoading = async () => {
    setIsLoading(true);
    await handleSearch();
    setIsLoading(false);
  };
  return (
    <div className='search--bar'>
      <input
        className='search--input'
        type='text'
        placeholder='Type here your ingredient!'
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button className='search--button' onClick={searchAnHandleLoading}>
        {isLoading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
