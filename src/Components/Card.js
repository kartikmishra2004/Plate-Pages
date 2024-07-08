import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    const [displayBtn, setDisplayBtn] = useState('hidden');
    let handleDisplayBtnHide = () => {
        setDisplayBtn('block');
    }
    let handleDisplayBtnShow = () => {
        setDisplayBtn('hidden');
    }
    return (
        <>
            <div onMouseEnter={handleDisplayBtnHide} onMouseLeave={handleDisplayBtnShow} className="card md:w-[330px] w-[300px]">
                <img className='rounded-[10px]' src={props.cardImage} alt="food-image" />
                <div className="card__content">
                    <p className="card__title">{props.title} ({props.dishArea})</p>
                    <p className="card__description tracking-wider">Category: {props.foodCategory}</p>
                    <p className="card__description tracking-wider">{props.description}...</p>
                    <div className="btns flex flex-col justify-center">
                        <Link target='_blank' rel='noreferrer' className={`${displayBtn} text-white bg-[#14b8a6] hover:bg-[#089686] font-2 rounded-lg text-sm px-5 py-2.5 me-2 text-center mb-2 mt-2`} to={props.foodRecipe}>View full recipe 👁️</Link>
                        <Link target='_blank' rel='noreferrer' className={`${displayBtn} text-white bg-[#d32f26] hover:bg-[#b3261e] font-2 rounded-lg text-sm px-5 py-2.5 me-2 text-center`} to={props.foodVideo}>Watch video ▶</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card