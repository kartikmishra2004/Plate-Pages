import React from 'react'

function ImproveSkills() {
    return (
        <div className='text-[#343434] flex flex-col md:flex-row justify-evenly items-center w-[98.8vw] mt-32'>
            <div className="randomImage"><img className=' rounded-xl md:w-[25vw] w-[94vw]' src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" alt="food-img" /></div>
            <div className="content mt-12 md:mt-0 md:w-[40vw] w-[98vw] md:pl-11 pl-0 text-center md:text-left">
                <h1 className='mb-6 text-[2.3rem] font-bold text-[#343434]'>Improve Your Culinary Skills</h1>
                <p className='text-xl md:w-[43vw]'>
                    <strong>&#x2937;</strong> <strong>Step-by-Step Instructions</strong>: Clear guidance for every recipe. <br />
                    <strong>&#x2937;</strong> <strong>Expert Tips and Tricks</strong>: Professional advice to enhance your skills. <br />
                    <strong>&#x2937;</strong> <strong>Video Tutorials</strong>: Visual demonstrations to bring recipes to life. <br />
                    <strong>&#x2937;</strong> <strong>Ingredient Insights</strong>: Learn about ingredients and their best uses. <br />
                    <strong>&#x2937;</strong> <strong>Skill-Building Challenges</strong>: Progressive tasks to boost your confidence.
                </p>
            </div>
        </div>
    )
}

export default ImproveSkills