import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {recipes} from './recipes_object'
import './alluStyle.css'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";


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
  const image_pilaf = require('./media/pilaf.jpg')
  const imageObj =
      {"0": image_porkanakakku, "1": image_pilaf}
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


        <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
        />
        <div>
        <Map center={[60.199550, 24.696819]} zoom={12}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
        </div>
    </div>

  )

}


ReactDOM.render(<App />, document.getElementById('root'))