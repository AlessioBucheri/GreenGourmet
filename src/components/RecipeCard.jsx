import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe--card'>
      <h4 className='recipe--title'>{recipe.title}</h4>
      <a href={recipe.sourceUrl} target='blank'>
        <img className='recipe--image' src={recipe.image} alt={recipe.title} />
      </a>
    </div>
  );
};

export default RecipeCard;
