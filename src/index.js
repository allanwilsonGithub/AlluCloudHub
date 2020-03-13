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

const RenderRecipeButtons = ( {recipes} ) => {
  return recipes.map((recipe, index) => <button key={index} className="button" onClick={() => handleRecipeState(index)}>{recipes[index].name}</button>)
}

const RenderRecipe = ( {recipes} ) => {
  console.log(recipes[recipeId].recipe_image)
  const image = require('./media/porkanakakku.jpg')
  //const image1 = require(recipes[recipeId].recipe_image)
  return (
          <div>
             <p className="recipe_heading">{recipes[recipeId].name}</p>
             <p>{recipes[recipeId].ingredients}</p>
             <p>{recipes[recipeId].recipe_text}</p>
             <img src={image} alt='' />
          </div>
  )}

  return (
    <div>
       <div>
        <h1>Cookbook</h1>
        <button type="button" className="button" onClick={handleRecipeButtonClick}>Add Recipe</button>
            <div>
              <RenderRecipeButtons recipes={recipes}/>
              <RenderRecipe recipes={recipes}/>

            </div>
        </div>
    </div>

  )

}


ReactDOM.render(<App />, document.getElementById('root'))