import { useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: ingredient,
            addRecipeInformation: true,
            diet: "vegetarian",
            number: 5,
            apiKey: "d0ffe0a048194bd6b8f5e5f2242c4e6c",
          },
        }
      );
      console.log(response.data.results);
      setRecipes(response.data.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
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
      <Footer />
    </>
  );
}

export default App;
