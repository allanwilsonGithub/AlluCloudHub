import React, { useState } from 'react'

const Cookbook = ( {recipes} ) => {
  const [ recipeId, setRecipeId ] = useState(0)

  const handleRecipeState = (id) => {
    setRecipeId(id)
  }

  const RenderRecipeButtons = ( {recipes} ) => {
    return recipes.map((recipe, index) => <button key={index} className="button" onClick={() => handleRecipeState(index)}>{recipes[index].name}</button>)
  }

  const addLineBreaks = string =>
    string.split('\n').map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
  ))

  const RenderRecipe = ( {recipes} ) => {
      const image_porkanakakku = require('../media/porkanakakku.jpg')
      const image_pilaf = require('../media/pilaf.jpg')
      const image_paprikaChicken = require('../media/paprikachicken.png')
      const image_lammingtons = require('../media/lammingtons.jpg')
      const image_strawberry_cake = require('../media/strawberry_cake.png')
      const image_rahkapiirakka = require('../media/rahkapiirakka.jpg')
      const image_tomato_halloumi_pasta = require('../media/tomato_halloumi_pasta.png')
      const image_bataatti_porkkana_keitto = require('../media/BataattiPorkkanaKeitto.jpg')
      const image_pannukakku = require('../media/pannukakku.jpg')
      const image_satay = require('../media/satay.jpg')
      const image_meatballs = require('../media/meatballs.jpg')
      const image_dahl = require('../media/dahl.png')
      const image_kinkku_kiusaus = require('../media/kiusaus.png')
      const image_red_curry_2 = require('../media/redCurry2.png')
      const image_kale_brunch = require('../media/kale_brunch.png')
      const imageObj = {
        "0": image_porkanakakku,
        "1": image_pilaf,
        "2": image_paprikaChicken,
        "3": image_lammingtons,
        "4": image_strawberry_cake,
        "5": image_rahkapiirakka,
        "6": image_tomato_halloumi_pasta,
        "7": image_bataatti_porkkana_keitto,
        "8": image_pannukakku,
        "9": image_satay,
        "10": image_meatballs,
        "11": image_dahl,
        "12": image_kinkku_kiusaus,
        "13": image_red_curry_2,
        "14": image_kale_brunch
        }

        return (
          <div>
          <p className="recipe_heading">{recipes[recipeId].name}</p>
          <p className="recipe_text">{addLineBreaks(recipes[recipeId].ingredients)}</p>
          <p className="recipe_text">{addLineBreaks(recipes[recipeId].recipe_text)}</p>
          <img src={imageObj[recipes[recipeId].recipe_image]} alt='' />
          </div>
        )
  }
      return (
              <div>
                <h1>Cookbook</h1>
                  <RenderRecipeButtons recipes={recipes}/>
                  <RenderRecipe recipes={recipes}/>
              </div>
              )
}

export default Cookbook