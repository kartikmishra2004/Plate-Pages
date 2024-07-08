import React from 'react'

function Card() {
    return (
        <>
            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-[#14b8a6] to-[#14b8a6]">
                </div>
                <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Hakka noodles
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-[#14b8a6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        View recipe
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card