import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe--card'>
      <h4 className='recipe--title'>{recipe.title}</h4>
      <img className='recipe--image' src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeCard;
