import React, { useState } from 'react';
import Cards from './Cards';

const Food = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("Search and Get Recipe's");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Something");
    } else {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await response.json();
        setData(jsonData.meals);
        setMsg(jsonData.meals ? "Your Search Results" : "No recipes found");
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setMsg("Error fetching recipes");
      }
    }
  };

  return (
    <>
      <h1 className="head">Recipe Ideas</h1>
      <div className="container">
        <div className="searchBar">
          <input 
            placeholder="Search Meals" 
            type="text" 
            onChange={handleInput}
            onKeyPress={(e) => e.key === 'Enter' && myFun()}
          />
          <button onClick={myFun}>Search</button>
        </div>
        <h2 className="msg">{msg}</h2>
        <Cards detail={data} />
      </div>
    </>
  );
};

export default Food;