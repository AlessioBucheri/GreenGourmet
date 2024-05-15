import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_URL;

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`${URL}/recipes/${id}/information`, {
          params: { apiKey: API_KEY },
        });
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);
  const handleBackToList = () => {
    navigate("/");
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className='recipeDetails--container'>
      <button className='backToList--button' onClick={handleBackToList}>
        Back to Recipes
      </button>
      <div className='recipeDetails--wrapper'>
        <div className='recipeDetails--left'>
          <h1 className='recipeDetails--title'>{recipe.title}</h1>
          <img
            className='recipeDetails--image'
            src={recipe.image}
            alt={recipe.title}
          />
        </div>
        <div className='recipeDetails--right'>
          <h2>Ingredients</h2>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
