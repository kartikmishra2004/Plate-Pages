import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import spinnerGif from './Images/loading.gif';

function Recipes() {
  document.title = 'Plate Pages - Recipes';
  const [meals, setMeals] = useState([]);
  const [cardImages, setCardImages] = useState(Array(18).fill(spinnerGif));
  const [loading, setLoading] = useState(true);
  const [loadingRecipes, setLoadingRecipes] = useState('Getting some recipes for you...');
  const [search, setSearch] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingRecipes('Check your network connection');
    }, 5000);

    async function fetchingData() {
      setLoading(true);
      const promises = [];
      const Base_URL = 'https://www.themealdb.com/api/json/v1/1/';

      if (search === null) {
        for (let i = 0; i < 18; i++) {
          promises.push(fetch(`${Base_URL}random.php`).then(response => response.json()));
        }
      } else {
        promises.push(fetch(`${Base_URL}${search}`).then(response => response.json()));
      }

      try {
        const mealData = await Promise.all(promises);
        const mealsArray = mealData.flatMap(data => data.meals || []);

        // Filter out duplicate meals based on foodID
        const uniqueMeals = Array.from(new Map(mealsArray.map(meal => [meal.idMeal, meal])).values());

        setMeals(uniqueMeals.map(meal => ({
          title: meal.strMeal,
          dishArea: meal.strArea,
          foodCategory: meal.strCategory,
          description: meal.strInstructions,
          cardImage: meal.strMealThumb,
          foodVideo: meal.strYoutube,
          foodRecipe: meal.strSource,
          foodID: meal.idMeal
        })));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

      setLoading(false);
      clearTimeout(timeout);
    }

    fetchingData();
  }, [search]);

  useEffect(() => {
    if (meals.length === 0) return;

    meals.forEach((meal, index) => {
      const img = new Image();
      img.src = meal.cardImage;
      img.onload = () => {
        setCardImages(prevState => {
          const newImages = [...prevState];
          newImages[index] = meal.cardImage;
          return newImages;
        });
      };
    });
  }, [meals]);

  const handleSearch = () => {
    const searchInput = document.getElementById('default-search').value;
    setSearch(`search.php?s=${searchInput}`);
    setSearchInput(searchInput);
    setLoadingRecipes(`Finding some '${searchInput}' recipes...`);
  };

  return (
    <div className='mt-36'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-6xl text-[2.3rem] text-center font-bold text-[#343434] mb-9'>Explore delicious recipes!</h1>

        <form className="md:w-[40vw] w-[90vw] mx-auto my-10" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="outline-0 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-4 focus:ring-[#0886864f] focus:border-[#343434]" placeholder="Find Recipes You'll Love"/>
            <button type="submit" className="text-white absolute end-[0.5rem] bottom-[0.4rem] bg-[#14b8a6] hover:bg-[#089686] font-medium rounded-lg text-[1rem] px-4 py-2">Search</button>
          </div>
        </form>

        <div className="cards pt-10 pb-16 overflow-hidden flex flex-wrap justify-center items-center md:gap-[4.5rem] gap-[3.5rem] mt-10 h-[100%] md:h-[100%]">
          {loading ? (
            <div className='flex animate-pulse justify-center h-[43vh] items-center text-center text-2xl text-[#343434]'>{loadingRecipes}</div>
          ) : (
            meals.length > 0 ? meals.map((meal, index) => (
              <Card
                key={meal.foodID}
                title={meal.title}
                dishArea={meal.dishArea}
                foodCategory={meal.foodCategory}
                description={meal.description.slice(0, 130)}
                cardImage={cardImages[index]}
                foodVideo={meal.foodVideo}
                foodRecipe={meal.foodRecipe}
              />
            )) : (
              <div className='text-center text-2xl text-[#343434]'>No result found for '{searchInput}'</div>
            )
          )}
        </div>
        <div className="flex justify-center w-[100%] mt-12 text-lg md:mt-28 md:text-2xl tracking-wide">Search your favorite recipes at the top!</div>
        <Link className='text-white bg-[#14b8a6] hover:bg-[#089686] font-2 rounded-lg text-2xl px-5 py-2.5 me-2 mt-20 mb-20' to='/'> &larr; Back to home</Link>
      </div>
    </div>
  );
}

export default Recipes;
