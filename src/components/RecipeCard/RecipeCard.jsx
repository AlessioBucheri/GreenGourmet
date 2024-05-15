import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  if (!recipe.sourceUrl) {
    return null; // Se l'immagine manca, non mostrare la ricetta
  }
  const divStyle = {
    backgroundImage: `url(${recipe.image})`,
    backgroundSize: "200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className='recipe--card' style={divStyle}>
      <Link className='recipe--link' to={`/recipe/${recipe.id}`}>
        <h4 className='recipe--title'>{recipe.title}</h4>
      </Link>
    </div>
  );
};

export default RecipeCard;
