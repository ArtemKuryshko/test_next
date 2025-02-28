import {Recipe, RecipeFull} from "@/interfaces/recipe.interface";

export async function fetchRecipes(query: string): Promise<Recipe[]> {

  const apiKey = process.env.RECIPE_API_KEY
  const url = `https://api.spoonacular.com/recipes/complexSearch?${query}&apiKey=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 60} });

  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: ${res.statusText}`);
  }

  const data = await res.json();

  return data.results;
}

export async function fetchSingleRecipe(id: string): Promise<RecipeFull> {
    const apiKey = process.env.RECIPE_API_KEY
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Failed to fetch a recipe: ${res.statusText}`);
    }

    const data = await res.json();

    return data;
}