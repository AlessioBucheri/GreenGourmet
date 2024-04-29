import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import "./App.css";
function App() {
  const apiKey = "d0ffe0a048194bd6b8f5e5f2242c4e6c";
  const [recipes, setRecipes] = useState([]);
  const [searchIngredient, setSearchIngredient] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15&tags=vegetarian`
      )
      .then((response) => {
        setRecipes(response.data.recipes);
        setFilteredRecipes(response.data.recipes);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, []);

  const filterRecipesByIngredient = () => {
    if (!searchIngredient) {
      return recipes;
    }
    return recipes.filter((recipe) =>
      recipe.extendedIngredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchIngredient.toLowerCase())
      )
    );
  };

  const handleSearch = () => {
    setFilteredRecipes(filterRecipesByIngredient());
  };

  return (
    <>
      <Navbar />
      <Main />
      <SearchBar
        setSearchIngredient={setSearchIngredient}
        onSearch={handleSearch}
      />
      <div className='recipe--list'>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
