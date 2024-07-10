import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './Components/scrollToTop';
import RecipePreview from './Components/RecipePreview';

export default function App() {
  const APIkey = process.env.REACT_APP_FOOD_RECIPE_API;
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loading-screen");
    loader.classList.add("loading-screen-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loading-screen");
    })
})
  return (
    <div>
    <div className="loading-screen"></div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/recipes' element={<Recipes APIkey={APIkey}/>}></Route>
          <Route exact path='/:mealid' element={<RecipePreview APIkey={APIkey} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
