import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const [data, setData] = useState(null);
  const { mealid } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await response.json();
        setData(jsonData.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    if (mealid) {
      fetchRecipe();
    }
  }, [mealid]);

  if (!data) return <div className="msg">Loading...</div>;

  return (
    <div className="mealInfo">
      <img src={data.strMealThumb} alt={data.strMeal} />
      <div className="info">
        <h1>Recipe Details</h1>
        <button>{data.strMeal}</button>
        <h3>Instructions:</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipe;