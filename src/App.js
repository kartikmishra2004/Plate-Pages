import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Settings from './Components/Settings';
import Recipes from './Components/Recipes'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './Components/scrollToTop';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/recipes' element={<Recipes />}></Route>
          <Route exact path='/settings' element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
