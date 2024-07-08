import React from 'react'
import quote from './Images/quote.svg'

function Quote() {
  return (
    <div className='flex md:my-40 my-20 justify-center items-center text-[#343434] '>
      <img className='md:w-[3.5rem] w-[1.5rem] md:ml-0 ml-5 relative md:bottom-[2.4rem] bottom-8 md:right-3 right-1' src={quote} alt="quote"/>
      <h1 className='md:text-4xl text-base md:w-[64vw] font-semibold'>Cooking is an art, and Palate Pages is your canvas. Savor every recipe, and create culinary masterpieces with us.</h1>
    </div>
  )
}

export default Quote
