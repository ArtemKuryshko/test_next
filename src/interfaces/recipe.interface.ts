export interface Recipe {
    id: number
    title: string
    image: string
    imageType: string
} 

export interface RecipeFull {
    id: number
    title: string
    image: string
    imageType: string
    instructions: string
    extendedIngredients: Ingredient[]
    readyInMinutes: string
    servings: number
}

interface Ingredient {
    id: string
    aisle: string
}