import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css';


const handleRecipeButtonClick = (props) => {
      console.log("TODO")
    }


const RecipeDropdownList = (props) => {
  return (
    <div>
      <select id="recipeSelect" class="button">
          <option value="x">Select a recipe:</option>
          <option value="0">{props.recipes[0].name}</option>
          <option value="1">{props.recipes[1].name}</option>
          <option value="2">{props.recipes[2].name}</option>
      </select>
    </div>
  )
}

const renderRecipe = (props) => {
       console.log("props value", props)
       const x = document.getElementById('recipeSelect');
       const recipeIndex = x.options[x.selectedIndex].value;
       if (recipeIndex === "x") {
         document.getElementById('recipePlace').textContent = "(select a recipe before you click the button)";
       } else {
         document.getElementById('ingredientsPlace').innerHTML = props.recipes[recipeIndex].ingredients;
         document.getElementById('recipePlace').innerHTML = props.recipes[recipeIndex].recipe_text;
       }
    }



const App = () => {

//TODO: make a separate file and import it to get these objects

  const [recipeId, setRecipeId] = useState(1)

  const handleRecipeState = (props) => {
    renderRecipe({recipes, recipeId})
    setRecipeId(props.recipeId)
  }

  return (
      <div>
      <div>
        <h1>Cookbook</h1>
        <button type="button" class="button" onClick={handleRecipeButtonClick}>Add Recipe</button>

        <RecipeDropdownList recipes={recipes} />
        <button type="button" class="button" onClick={() => handleRecipeState({recipes, recipeId})}>Show Recipe</button>
        <p id='ingredientsPlace'></p>
        <p id='recipePlace'></p>
      </div>
      <div>
        <h1>Sports and Hobbies</h1>
      </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))