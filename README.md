# Recipe Finder App

## Overview

The **Recipe Finder App** is a Next.js application that allows users to search for recipes based on query parameters such as cuisine type and preparation time. Users can browse through the search results and view detailed information about each recipe.

## Features

### 1. **Search Recipes**

- Users can enter a recipe **query** (e.g., "pasta").
- A dropdown allows selection of a **cuisine type** (Italian, Mexican, Chinese, etc.).
- A numeric input enables users to specify **maximum preparation time** in minutes.
- The **Next** button is enabled only when at least one of the three fields is filled.
- Upon clicking **Next**, users are navigated to the `recipes` page with query parameters included in the URL.

### 2. **Browse Recipes (Recipes Page)**

- Uses **server-side rendering (SSR)** to fetch recipe data.
- Fetches data from the Spoonacular API:
  ```
  https://api.spoonacular.com/recipes/complexSearch?query={query}&cuisine={cuisine}&maxReadyTime={maxReadyTime}&apiKey=YOUR_API_KEY
  ```
- Displays a list of recipes with **title and image**.
- Clicking a recipe redirects the user to the **Recipe Details Page**.
- API response is cached for **1 minute** to optimize performance.
- Implements **error handling** for API failures.

### 3. **View Recipe Details (Recipe Details Page)**

- Fetches recipe details from the Spoonacular API:
  ```
  https://api.spoonacular.com/recipes/<recipeId>/information?apiKey=YOUR_API_KEY
  ```
- Displays the following details:
  - **Recipe title**
  - **List of ingredients**
  - **(Optional) Preparation time, servings, summary**

### 4. **Optimized Performance**

- Caches API responses to reduce redundant requests.
- Implements **server-side rendering (SSR)** for initial data fetch.

### 5. **UI & Styling**

- Fully styled using **Tailwind CSS**.
- Responsive design for **mobile-first approach**.
- Accessible design following **best practices**.

## Installation & Setup

### **Prerequisites**

- Node.js (v16+ recommended)
- npm or yarn

### **Steps to Run the Application**

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env` file in the root directory and add your Spoonacular API key:
   ```sh
   API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Architecture

- The application follows a **modular architecture** where each component is **separated and reusable**.
- Pages are structured using the **App Router** (Next.js 13+ with `app/` directory).
- API calls are managed in separate **services**.
- Components are divided into:
  - **UI components** (select, form fields, etc.)
  - **Page components** (search, recipes, recipe details)
  - **services** (API calls and data fetching functions)
- ESLint and Prettier are configured to maintain **code quality**.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Spoonacular API Documentation](https://spoonacular.com/food-api/docs)

## License

This project is licensed under the **MIT License**.
