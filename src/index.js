import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css'
import DisplayMap from "./components/alluMap"

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
  const [activeRoute, setActiveRoute] = useState(null)
  const [activeMunro, setActiveMunro] = useState(null)

  const handleRecipeState = (id) => {
    setRecipeId(id)
  }

const RenderRecipeButtons = ( {recipes} ) => {
  return recipes.map((recipe, index) => <button key={index} className="button" onClick={() => handleRecipeState(index)}>{recipes[index].name}</button>)
}

const RenderRecipe = ( {recipes} ) => {
  console.log(recipes[recipeId].recipe_image)
  const image_porkanakakku = require('./media/porkanakakku.jpg')
  const image_pilaf = require('./media/pilaf.jpg')
  const image_paprikaChicken = require('./media/paprikachicken.png')
  const image_lammingtons = require('./media/lammingtons.jpg')
  const image_strawberry_cake = require('./media/strawberry_cake.png')
  const image_rahkapiirakka = require('./media/rahkapiirakka.jpg')
  const image_tomato_halloumi_pasta = require('./media/tomato_halloumi_pasta.png')
  const imageObj = {
    "0": image_porkanakakku,
    "1": image_pilaf,
    "2": image_paprikaChicken,
    "3": image_lammingtons,
    "4": image_strawberry_cake,
    "5": image_rahkapiirakka,
    "6": image_tomato_halloumi_pasta
    }
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
        <div>
        <DisplayMap activeRoute={activeRoute} setActiveRoute={setActiveRoute} activeMunro={activeMunro} setActiveMunro={setActiveMunro} />
        </div>

        <div>
        <iframe height='454' title='strava' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/6764130/latest-rides/a4818acb778d736aee592cc0435fda4e8038c80e'></iframe>
        </div>
     </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))