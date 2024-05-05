import React from "react";
import "./LoadMoreButton.css";

function LoadMoreButton({ onLoadMore }) {
  return (
    <div className='load--more--container'>
      <button className='load--more--button' onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
