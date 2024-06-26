import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import RecipeCard from "./components/RecipeCard/RecipeCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import PageLayout from "./components/PageLayout";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails"; // Importa il nuovo componente

const API_KEY = import.meta.env.VITE_API_KEY;
const URL = import.meta.env.VITE_URL;

function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(9);
  const [hasLoaded, setHasLoaded] = useState(false);

  const fetchRecipes = async (offset = 0) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: ingredient,
            addRecipeInformation: true,
            diet: "vegetarian",
            number: 9,
            offset: offset,
            apiKey: API_KEY,
          },
        }
      );
      return response.data.results.filter(
        (recipe) => recipe.id && recipe.title && recipe.image
      );
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };

  const handleSearch = async () => {
    if (!ingredient) return setRecipes([]);
    const validRecipes = await fetchRecipes();
    setRecipes(validRecipes);
    setHasLoaded(true);
  };

  const handleLoadMore = async () => {
    const offset = loadedRecipes;
    const additionalRecipes = await fetchRecipes(offset);
    setRecipes([...recipes, ...additionalRecipes]);
    setLoadedRecipes((prevLoadedRecipes) => prevLoadedRecipes + 9);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PageLayout>
              <MainContent />
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
              {hasLoaded && recipes.length > 0 && (
                <LoadMoreButton onLoadMore={handleLoadMore} />
              )}
            </PageLayout>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />{" "}
        {/* Nuova rotta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
