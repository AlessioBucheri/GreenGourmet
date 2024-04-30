import React, { useState } from "react";

function SearchBar() {
  return (
    <div className='search--bar'>
      <input
        className='search--input'
        type='text'
        placeholder='Type here your ingredient!'
      />
      <button className='search--button'>Search</button>
    </div>
  );
}

export default SearchBar;
