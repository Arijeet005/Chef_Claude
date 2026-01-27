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
You are an intelligent cooking assistant.

Your task is to suggest exactly ONE complete and fully written recipe using the given ingredients.
You MUST return a finished recipe — no partial responses, no cut-off sentences, and no unfinished sections.

Ingredients:
${ingredientsString}

STRICT RULES:
- The response must be COMPLETE from start to end
- Do NOT stop mid-sentence or mid-step
- Do NOT ask follow-up questions
- Do NOT include explanations, apologies, or extra commentary
- Do NOT include system messages or meta text

FORMAT RULES:
- Respond ONLY in Markdown
- Do NOT use tables
- Use clear headings and bullet points
- Ensure every section is fully written

REQUIRED SECTIONS:
- Recipe Name
- Brief Description
- Ingredients Used
- Step-by-Step Cooking Instructions
- Tips or Variations (optional)

QUALITY REQUIREMENTS:
- Every cooking step must be complete and clear
- The recipe must be logically consistent
- The recipe must be ready to follow without missing information

Return ONLY the full recipe and nothing else.

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
