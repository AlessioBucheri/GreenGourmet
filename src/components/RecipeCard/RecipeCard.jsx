import React from "react";
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
      <a
        className='recipe--link'
        href={recipe.sourceUrl}
        target='_blank'
        rel='noreferrer noopen'
      >
        <h4 className='recipe--title'>{recipe.title}</h4>
      </a>
    </div>
  );
};

export default RecipeCard;
