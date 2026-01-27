import axios from "axios";



export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
                }`,
            method: "post",
            data: {
                contents: [
                    {
                        parts: [
                            {
                                text: `
You are an assistant that receives a list of ingredients
and suggests a recipe the user can make.

Ingredients:
${ingredientsString}

Give a detailed recipe in markdown format without using tables.
`
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1024
                }
            }
        });

        return response.data.candidates[0].content.parts[0].text;

    } catch (err) {
        console.error(err.message);
        return "Failed to generate recipe.";
    }
}
