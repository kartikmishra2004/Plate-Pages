import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import spinnerGif from './Images/loading.gif';

function Home() {
  const [meals, setMeals] = useState([]);
  const [cardImages, setCardImages] = useState(Array(6).fill(spinnerGif));
  const [loading, setLoading] = useState(true);
  const hasFetchedData = useRef(false);
  const [loadingRecipes, setLoadingRecipes] = useState('Getting some recipes for you...')

  setTimeout(() => {
    setLoadingRecipes('Check your network connection')
  }, 5000);

  useEffect(() => {
    if (hasFetchedData.current) return;
    hasFetchedData.current = true;

    async function fetchingData() {
      const Base_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const promises = Array.from({ length: 6 }, () => fetch(Base_URL).then(response => response.json()));
      const mealData = await Promise.all(promises);
      setMeals(mealData.map(data => ({
        title: data.meals[0].strMeal,
        dishArea: data.meals[0].strArea,
        foodCategory: data.meals[0].strCategory,
        description: data.meals[0].strInstructions,
        cardImage: data.meals[0].strMealThumb,
        foodVideo: data.meals[0].strYoutube,
        foodRecipe: data.meals[0].strSource,
        foodID: data.meals[0].idMeal
      })));
      setLoading(false);
    }
    fetchingData();
  }, []);

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

  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='md:text-6xl text-[2.3rem] text-center font-bold text-[#343434] mb-9'>Some recipes for you</h1>
        <div className="cards grid md:grid-cols-3 md:grid-rows-2 grid-rows-6 gap-[3.5rem] mt-10 h-[100%] md:h-[105vh]">
          {loading ? (<div className='relative md:left-96 animate-pulse flex h-[43vh] justify-center items-center text-center text-2xl text-[#343434]'>{loadingRecipes}</div> ) : (meals.map((meal, index) => (
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
          ))
          )}
        </div>
        <Link className='text-white bg-[#14b8a6] hover:bg-[#089686] font-2 rounded-lg text-2xl px-5 py-2.5 me-2 mt-20 mb-20' to='/recipes'>Explore more recipes &rarr;</Link>
      </div>
    </div>
  );
}

export default Home;
