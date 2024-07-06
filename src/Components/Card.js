import React from 'react'
import foodImage from './foodimage.jpg'

function Card() {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img className="rounded-t-lg" src={foodImage} alt="" />
                </a>
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Veg Noodles</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, debitis?</p>
                    <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#14b8a6] rounded-lg hover:bg-[#0d9488] active:bg-[#14b8a6]">
                        View recipe
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card
