import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css';


const handleRecipeButtonClick = (props) => {
      console.log("TODO")
    }


const App = () => {

  const [ recipeId, setRecipeId ] = useState(0)

  const handleRecipeState = (id) => {
    setRecipeId(id)
  }

const RenderRecipeButtons = (props) => {
  let i = 0
  for (i = 0; i < recipes.length; i++) {
    const newHtml = <button className="button" onClick={() => handleRecipeState(0)}>{recipes[0].name}</button>
    return newHtml
  }

}


  return (
    <div>
       <div>
        <h1>Cookbook</h1>
        <button type="button" className="button" onClick={handleRecipeButtonClick}>Add Recipe</button>
            <div>
              <RenderRecipeButtons />
            </div>
        </div>

        <pre>{recipes[recipeId].ingredients}</pre>
        <pre>{recipes[recipeId].recipe_text}</pre>

      <div>
        <h1>Sports and Hobbies</h1>
      </div>
    </div>

  )

}


ReactDOM.render(<App />, document.getElementById('root'))