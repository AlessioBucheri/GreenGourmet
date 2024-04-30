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

  return (
    <>
      <Navbar />
      <Main />
      <SearchBar />
      <div className='recipe--list'>
        <RecipeCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
