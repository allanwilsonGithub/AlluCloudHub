import React from 'react'
import ReactDOM from 'react-dom'

const RecipeDropdownList = (props) => {
  return (
    <div>
      <select id="recipeSelect">
          <option value="0">Select recipe:</option>
          <option value="1">{props.recipes[0].name}</option>
          <option value="2">{props.recipes[1].name}</option>
          <option value="3">{props.recipes[2].name}</option>
      </select>
    </div>
  )
}

const handleRecipeButtonClick = (props) => {
      console.log('Clicked')
    }


const renderRecipe = (props) => {
        console.log(props)
        const x = document.getElementById("recipeSelect").value;
        document.getElementById("recipePlace").innerHTML = x;
    }



const App = () => {
  const recipes = [
      {
        name: 'Bataatti Porkkana Kookoskeitto',
        recipe_text: 'Iso bataatti. 2-3 porkkanaa'
      },
      {
        name: 'Pytti Pannu',
        recipe_text: 'Fry one garlic clove, Boil 6 tatties (skin on), peel and cube'
      },
      {
        name: 'Carbonara',
        recipe_text: 'Panchetta (Italian fine bacon) - or other salty strips of bacon. Maybe 200g?'
      }
  ]

  return (
    <div>
      <div>
        <h1>Cookbook</h1>
        <button type="button" onClick={handleRecipeButtonClick}>Add Recipe</button>
        <br></br>
        <RecipeDropdownList recipes={recipes} />
        <button type="button" onClick={renderRecipe({recipes})}>Show Recipe</button>
        <p id='recipePlace'></p>


      </div>
      <div>
        <h1>Sports and Hobbies</h1>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))