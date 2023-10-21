import "./App.css";
import React, { Component } from "react";

class RecipeApp extends Component {
  render() {
    const recipe = {
      name: "Pizza",
      ingredients: [
        "TESTO",
        "Cheese",
        // Добавьте другие ингредиенты и их количество
      ],
      instructions: "Последовательность приготовления...",
    };

    return (
      <div className="App">
        <h1>{recipe.name}</h1>
        <h2>Ингредиенты</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Приготовление</h2>
        <p>{recipe.instructions}</p>
      </div>
    );
  }
}

export default RecipeApp;
