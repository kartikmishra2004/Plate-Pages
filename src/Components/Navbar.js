import React, { useState } from 'react'
import hamMenu from './Images/ham-menu.svg'
import logo from './Images/logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  let [mobileNav, setMobileNav] = useState('left-full');
  const handleToggleMenu = () => {
    if (mobileNav === 'left-full') {
      setMobileNav('left-0')
    }
    else {
      setMobileNav('left-full')
    }
  }
  return (
    <div>
      <nav className="fixed top-0 z-10 w-screen bg-teal-500 h-fit overflow-hidden">
        <div className="py-4 lg:px-8 px-4 max-w-[1339px] h-[5rem] m-auto text-white flex items-center justify-between">
          <div className='flex items-center'>
            <Link to='/'><img className='w-10 h-10 mr-3' src={logo} alt="logo" /></Link>
            <Link to='/'><h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">Plate Pages</h1></Link>
          </div>
          <div className="md:flex hidden lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center" id="navItems">
            <Link to='/' className="group">
              Home
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </Link>
            <Link to='/recipes' className="group">
              Recipes
              <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
            </Link>
          </div>
          <div id="hamburger" className="md:hidden flex fa fa-bars items-center text-xl"><img onClick={handleToggleMenu} className='w-7 h-7 invert' src={hamMenu} alt="" srcSet="" /></div>
          <div id="mobileNav"
            className={`${mobileNav} z-10 md:hidden flex fixed items-center flex-col gap-8 pt-[3rem] px-4 text-xl uppercase bg-teal-600 h-[30vh] inset-0 top-[5rem] w-[100%] ease-in-out duration-500 cursor-pointer`}>
            <Link onClick={handleToggleMenu} to='/'>Home</Link>
            <Link onClick={handleToggleMenu} to='/recipes'>Recipes</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}