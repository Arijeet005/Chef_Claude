import { getRecipeFromMistral } from "./ai"

export default function IngredientsList(props){

    const ingredientList=props.ingredients.map( ingredient => (<li key={ingredient} id='ingredients' >{ingredient}</li>))

    async function getRecipe(){
        const recipeMarkDown = await getRecipeFromMistral(ingredientStrings)
        props.setRecipe(recipeMarkDown);
        
        
        
    }

    function mapIngredientsToStrings(ingredients) {
  return ingredients.map(item => {
    if (typeof item === "string") {
      return item.trim()
    } else if (typeof item === "object" && item.name) {
      return String(item.name).trim()
    } else {
      return String(item).trim()
    }
  })
}

const ingredientStrings = mapIngredientsToStrings(props.ingredients)


    return(
        props.ingredients.length>0 && (<section>
                <h2 className='list-head'>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
                {props.ingredients.length >= 4 && <div className="get-recipe-container">
                    <div ref={props.ref} id="recipeSection">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>}
            </section>)


    )
}