import React from "react";
import { Link } from "react-router-dom";

export default function SearchRecipes({ searchResults }) {
    console.log(searchResults)
  return (
    <div>
      <ul>
        {searchResults.map((recipe) => (
          <li key={recipe.id}>
          <Link to={`/Recipedetail/${recipe.id}`}>
          <img
            src={recipe.photo}
            alt={recipe.name}
            className="category-image"
          />
        </Link>
          <h3>{recipe.name}</h3>
          <p>{recipe.introduction}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}
