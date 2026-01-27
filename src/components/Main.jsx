import '../index.css'
import React from "react"
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from "./ai"

export default function Main(){


    const [ingredients, setIngredients] = React.useState([
  
])

    const [recipeShown, setRecipeShown] = React.useState(false)

    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    React.useEffect( () => {

        if(recipe !=="" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }

    } , [recipe])

    function addIngredient(formData) {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient && /^[a-zA-Z]+$/.test(newIngredient)) {
        setIngredients(prevIngredients => ([...prevIngredients, newIngredient]));
    } else {
        alert("enter a valid input");
    }
}


    return(
        <>
        <form action={addIngredient} className='form' >
            <input type="text" className='form-ip' placeholder="eg. Oregano" name="ingredient"/>
            <button className='form-button' >+ Add Ingredient</button>

        </form>
        <IngredientsList ref={recipeSection} ingredients={ingredients} setRecipeShown={setRecipeShown} setRecipe={setRecipe}/>
        
        <ClaudeRecipe recipe={recipe}/>

         </>
    )
}