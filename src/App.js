import './App.css';
import { Route, Routes } from 'react-router-dom';
import Food from "./Components/Food";
import Recipe from './Components/Recipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Food />} />
      <Route path="/:mealid" element={<Recipe />} />
    </Routes>
  );
}

export default App;