import ReactMarkdown from "react-markdown"
import "../index.css"

export default function ClaudeRecipe(props){
    return(
          props.recipe && (<section className="suggested-recipe-container" >
            <h2>Chef Claude recommends : </h2>
    <ReactMarkdown >{props.recipe}</ReactMarkdown>
</section>)
    )
}