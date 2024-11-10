import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ detail }) => {
  if (!detail) return <div className="msg">No recipes to display</div>;

  return (
    <div className="meals">
      {detail.map((curItem) => (
        <div className="mealImg" key={curItem.idMeal}>
          <img src={curItem.strMealThumb} alt={curItem.strMeal} />
          <p>{curItem.strMeal}</p>
          <Link to={`/${curItem.idMeal}`}>
            <button>Recipe</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;