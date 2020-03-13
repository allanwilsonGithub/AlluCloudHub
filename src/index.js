import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css';


const handleRecipeButtonClick = (props) => {
      console.log("TODO")
    }

const addLineBreaks = string =>
  string.split('\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));



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
  const image_porkanakakku = require('./media/porkanakakku.jpg')
  const imageObj =
      {"0": image_porkanakakku}
  return (
          <div>
             <p className="recipe_heading">{recipes[recipeId].name}</p>
             <p className="recipe_text">{addLineBreaks(recipes[recipeId].ingredients)}</p>
             <p className="recipe_text">{addLineBreaks(recipes[recipeId].recipe_text)}</p>
             <img src={imageObj[recipes[recipeId].recipe_image]} alt='' />
          </div>
  )}

  return (
    <div>
       <div>
        <h1>Cookbook</h1>
        <button type="button" className="button2" onClick={handleRecipeButtonClick}>Add Recipe</button>
            <div>
              <RenderRecipeButtons recipes={recipes}/>
              <RenderRecipe recipes={recipes}/>

            </div>
        </div>
    </div>

  )

}


ReactDOM.render(<App />, document.getElementById('root'))