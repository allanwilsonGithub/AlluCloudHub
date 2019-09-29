import React from 'react'
import ReactDOM from 'react-dom'

const RecipeDropdownList = (props) => {
  return (
    <div>
      <select id="recipeSelect">
          <option value="x">Select a recipe:</option>
          <option value="0">{props.recipes[0].name}</option>
          <option value="1">{props.recipes[1].name}</option>
          <option value="2">{props.recipes[2].name}</option>
      </select>
    </div>
  )
}

const handleRecipeButtonClick = (props) => {
      console.log("TODO")
    }


const renderRecipe = (props) => {
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
  const recipes = [
      {
        name: 'Asian Noodle Salad',
        ingredients: 'Chopped: Spring Onion<br>Chopped: Chinese Cabbage or Lettuce<br>Crushed: Cashew nuts or almonds',
        recipe_text: 'Mix while heating gently and pour over:<br>Olive Oil     1/2 cup<br>Caster Suger  1/4 cup<br>'
                        + 'Vinigar       1/4 cup<br>Soy Sauce     2 Tbspns<br><br>Add asian noodles if you can '
                        + 'find them'
      },
      {
        name: 'Pytti Pannu',
        ingredients: '',
        recipe_text: 'Fry one garlic clove<br>Boil 6 tatties (skin on), peel and cube<br>Fry chicken completely<br>1/2'
                       + 'tsp curry powder<br>chop nakki<br><br>1/2 tsp paprika powder<br>fry all to get colour<br>'
                       + 'add 2 raw eggs<br>+ salt<br>'

      },
      {
        name: 'Carbonara',
        ingredients: '',
        recipe_text: 'Panchetta (Italian fine bacon) - or other salty strips of bacon. Maybe 200g?'
      }
  ]

  return (
    <div>
      <div>
        <h1>Cookbook</h1>
        <button type="button" onClick={handleRecipeButtonClick}>Add Recipe</button>
        <RecipeDropdownList recipes={recipes} />
        <button type="button" onClick={() => renderRecipe({recipes})}>Show Recipe</button>
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