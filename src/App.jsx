import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LoadMoreButton from "./components/LoadMoreButton";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(9);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleSearch = async () => {
    if (!ingredient) return setRecipes([]);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: ingredient,
            addRecipeInformation: true,
            diet: "vegetarian",
            number: loadedRecipes,
            apiKey: "d0ffe0a048194bd6b8f5e5f2242c4e6c",
          },
        }
      );
      const validRecipes = response.data.results.filter(
        (recipe) => recipe.id && recipe.title && recipe.image
      );

      setRecipes(validRecipes); // Aggiorna lo stato recipes aggiungendo le nuove ricette ai risultati precedenti
      setHasLoaded(true); // Imposta il flag su true quando le ricette sono state caricate
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: ingredient,
            addRecipeInformation: true,
            diet: "vegetarian",
            number: 9,
            offset: loadedRecipes,
            apiKey: "d0ffe0a048194bd6b8f5e5f2242c4e6c",
          },
        }
      );
      setRecipes([...recipes, ...response.data.results]);
      setLoadedRecipes((prevLoadedRecipes) => prevLoadedRecipes + 9);
    } catch (error) {
      console.error("Error fetching more recipes:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Main />
      <SearchBar
        ingredient={ingredient}
        setIngredient={setIngredient}
        handleSearch={handleSearch}
      />
      <div className='recipe--list'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {hasLoaded &&
        recipes.length > 0 && ( // Controlla la lunghezza dell'array recipes per rendere il pulsante "Load More" visibile
          <LoadMoreButton onLoadMore={handleLoadMore} />
        )}
      <Footer />
    </>
  );
}

export default App;
