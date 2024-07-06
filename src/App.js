import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/Card';

export default function App() {
  document.body.style.backgroundColor = '#14b8a614';
  return (
    <div>
      <Navbar/>
      <Card/>
    </div>
  )
}
