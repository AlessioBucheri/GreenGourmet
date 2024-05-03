import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe--card'>
      <a href={recipe.sourceUrl} target='blank' rel='noopener noreferrer'>
        <img className='recipe--image' src={recipe.image} alt={recipe.title} />
      </a>
      <h4 className='recipe--title'>{recipe.title}</h4>
    </div>
  );
};

export default RecipeCard;
