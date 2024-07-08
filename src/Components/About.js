import React from 'react'

function About() {
    return (
        <div className='text-[#343434] flex flex-col-reverse md:flex-row justify-evenly items-center w-[98.8vw] mt-16'>
            <div className="content mt-12 md:mt-0 md:w-[40vw] w-[98vw] md:pl-11 pl-0 text-center md:text-left">
                <h1 className='mb-6 text-[2.3rem] font-bold text-[#343434]'>What are we about</h1>
                <p className='text-xl'>At Palate Pages, our mission is to transform your cooking experience by providing a diverse collection of recipes that inspire and delight. We cater to all skill levels, from novice cooks to seasoned chefs, offering clear instructions and expert tips to make every meal a success. We believe in savoring each dish and turning everyday cooking into a memorable culinary adventure. Join us at Palate Pages to explore new flavors, master techniques, and enjoy the art of cooking.</p>
            </div>
            <div className="img-gallery md:w-[40vw] w-[98vw] flex justify-center items-center">
                <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/784632/pexels-photo-784632.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className='hover:scale-110 hover:rotate-1 transition-all'>
                            <img className="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
