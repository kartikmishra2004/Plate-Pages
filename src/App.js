import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import API from './Components/API';
import Recipes from './Components/Recipes'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/recipes' element={<Recipes />}></Route>
          <Route exact path='/api' element={<API />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
