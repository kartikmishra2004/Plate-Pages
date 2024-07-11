import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './Components/scrollToTop';
import RecipePreview from './Components/RecipePreview';

export default function App() {
  const APIkey = process.env.REACT_APP_FOOD_RECIPE_API;
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div>
      {isLoading ? (
        <div className="loader flex h-[90vh] md:h-[100vh] w-[100%] justify-center items-center">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/recipes' element={<Recipes APIkey={APIkey} />} />
            <Route exact path='/:mealid' element={<RecipePreview APIkey={APIkey} />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
