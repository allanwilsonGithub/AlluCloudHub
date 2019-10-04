import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css';


const handleRecipeButtonClick = (props) => {
      console.log("TODO")
    }


const App = () => {

  const [recipeId, setRecipeId] = useState(0)

  const handleRecipeState = (id) => {
    setRecipeId(id)
  }

  const renderRecipe = (props) => {
       document.getElementById('ingredientsPlace').innerHTML = props.recipes[recipeId].ingredients;
       document.getElementById('recipePlace').innerHTML = props.recipes[recipeId].recipe_text;
    }

  return (
      <div>
      <div>
        <h1>Cookbook</h1>
        <button type="button" className="button" onClick={handleRecipeButtonClick}>Add Recipe</button>

        <div>
            <div>
              <button className="button" onClick={() => renderRecipe({recipes})}>Render (this should be automatic!)</button>
              <button className="button" onClick={() => handleRecipeState(0)}>{recipes[0].name}</button>
              <button className="button" onClick={() => handleRecipeState(1)}>{recipes[1].name}</button>
              <button className="button" onClick={() => handleRecipeState(2)}>{recipes[2].name}</button>
            </div>
        </div>
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