import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const { mealid } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await response.json();
            setData(jsonData.meals[0]);
        };
        fetchData();
    }, [mealid]);

    return (
        <div>
            {!data ? "Not Found" : 
            <div className='mealInfo'>
                <img src={data.strMealThumb} alt={data.strMeal} />
                <div className='info'>
                    <h1>Recipe Details</h1>
                    <h2>{data.strMeal}</h2>
                    <h3>Instruction</h3>
                    <p>{data.strInstructions}</p>
                </div>
            </div>
            }
        </div>
    );
};

export default Recipe;
