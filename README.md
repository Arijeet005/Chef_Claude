<h1>
  <img src="./src/assets/chef-claude-icon.png" alt="Chef Claude Logo" width="36" style="vertical-align: middle; margin-right: 10px;" />
  Chef Claude
</h1>

Chef Claude is an intelligent cooking assistant built with React and Vite. It helps you decide what to cook by generating a complete recipe based on the ingredients you have on hand, powered by the Google Gemini API.

## Features

-   **Ingredient Management**: Add ingredients to your pantry list.
-   **AI Recipe Generation**: Uses Google's Gemini Flash model to create a unique, complete recipe from your listed ingredients.
-   **Formatted Output**: Displays the recipe in a clean, easy-to-read Markdown format with steps, ingredients, and descriptions.

## Tech Stack

-   **Frontend**: React, Vite
-   **Styling**: CSS
-   **AI Integration**: Google Generative AI (Gemini)

## Getting Started

### Prerequisites

-   Node.js installed.
-   A Google Gemini API key.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Arijeet005/Chef_Claude.git
    cd chef-claude
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory and add your Google Gemini API key:

    ```env
    VITE_API_GENERATIVE_LANGUAGE_CLIENT=your_google_api_key_here
    ```

    > **Note:** Ensure your `.env` file is added to `.gitignore` to protect your API key.

4.  **Run the application:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Usage

1.  Enter an ingredient in the input field and click "Add ingredient".
2.  Add at least 4 ingredients to unlock the "Get a recipe" button.
3.  Click "Get a recipe" and wait for Chef Claude to work his magic!
4.  Follow the generated instructions to cook your meal.
