import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipePreview(props) {
  const [mealName, setMealName] = useState('Name not available');
  const [mealArea, setMealArea] = useState('not available');
  const [mealCategory, setMealCategory] = useState('category not available');
  const [mealImage, setMealImage] = useState([]);
  const [mealVideo, setMealVideo] = useState(null);
  const [mealInstructions, setMealInstructions] = useState('instructions not available');
  const [mealIngredients, setMealIngredients] = useState([]);
  const [mealMeasures, setMealMeasures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading your recipe...');
  const [displayImg, setDisplayImg] = useState('flex')

  const { mealid } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const BASE_URL = `https://www.themealdb.com/api/json/v1/${props.APIkey}/lookup.php?i=${mealid}`;
      const data = await fetch(BASE_URL);
      const jsonData = await data.json();
      const meal = jsonData.meals[0];

      setMealName(meal.strMeal);
      setMealArea(meal.strArea);
      setMealCategory(meal.strCategory);
      setMealImage(meal.strMealThumb);
      setMealVideo(meal.strYoutube);
      setMealInstructions(meal.strInstructions);

      // Extract ingredients and measures
      const ingredients = [];
      const measures = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push(ingredient);
          measures.push(measure);
        }
      }

      setMealIngredients(ingredients);
      setMealMeasures(measures);
      setLoading(false);
    };

    getInfo();
  }, [mealid, props.APIkey]);

  const myRef = useRef(null);

  const handleScroll = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  setTimeout(() => {
    setLoadingText('Check your network connection');
  }, 5000);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='animate-pulse flex h-[43vh] justify-center items-center text-center text-2xl text-[#343434]'>{loadingText}</div>
      </div>
    );
  }
  if (loading === true) {
    setDisplayImg('hidden');
  }
  return (
    <>
      <div className='flex justify-center h-[100%] w-[100%] mt-36  flex-col md:flex-row'>
        <div className="left md:w-[50%] w-[100%] flex justify-center">
          <img className={`recipe-prev-img md:w-[364px] w-[295px] rounded-[10px] items-center ${displayImg}`} src={mealImage} alt="food-image" />
        </div>
        <div className="right gap-5 md:w-[50%] w-[100%] flex flex-col md:items-start items-center mt-10 md:mt-0">
          <h1 className='md:text-5xl text-[2.5rem] font-bold text-[#343434]'>{mealName}</h1>
          <p className='md:text-5xl text-[2.5rem] font-semibold text-[#343434]'>({mealArea} dish)</p>
          <p className='text-3xl font-semibold text-[#343434]'>Category : {mealCategory}</p>
          <div className="gap-2 py-6 w-[82%] flex items-center flex-col">
            <Link onClick={handleScroll} className='text-white w-[14rem] md:w-[100%] bg-[#14b8a6] hover:bg-[#089686] rounded-lg text-base px-5 py-2.5 me-2 text-center mb-2 mt-2'>View recipe</Link>
            <Link to={!mealVideo ? `/${mealid}` : mealVideo} target={!mealVideo ? '' : `_blank`} rel='noreferrer' className='text-[#14b8a6] w-[14rem] md:w-[100%] bg-[#ffffff] border-2 border-[#14b8a6] rounded-lg text-base px-5 py-2.5 me-2 text-center'>Watch video</Link>
          </div>
        </div>
      </div>
      <div className="Recipe flex flex-col items-center md:mt-[7rem] mt-0">
        <h1 ref={myRef} className='text-5xl font-bold text-[#343434] md:pt-[6rem] pt-[3rem]'>Recipe</h1>
        <div className="flex flex-col-reverse md:flex-row justify-evenly w-[100%] md:mt-28 mt-[4rem] mb-12">
          <div className="instructions flex flex-col items-center md:w-[50%] w-[100%] md:px-24 mt-14 md:mt-0">
            <h1 className='text-3xl font-bold text-[#343434] mb-8'>Instructions</h1>
            <p className='text-lg px-10 md:text-left text-center'>{mealInstructions}</p>
          </div>
          <div className="Ingredients flex flex-col items-center md:w-[50%] w-[100%] md:px-24 px-0">
            <h1 className='text-3xl font-bold text-[#343434] mb-8'>Ingredients</h1>
            <div className="ingredients-list items-center md:items-start flex flex-col gap-1">
              {mealIngredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item flex gap-1">
                  <p>{ingredient}</p>
                  <p>- {mealMeasures[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link className='text-white bg-[#14b8a6] hover:bg-[#089686] font-2 rounded-lg text-2xl px-5 py-2.5 me-2 mt-3 md:mt-20 mb-[4rem] md:mb-20' to='/'> &larr; Back to home</Link>
      </div>
    </>
  );
}

export default RecipePreview;