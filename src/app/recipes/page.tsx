import { Suspense, use } from 'react'
import Link from 'next/link'
import { Recipe } from '@/interfaces/recipe.interface'
import { fetchRecipes } from '@/services/recipes.service'
import Loading from '@/components/UI/Loading/Loading'
import RecipesList from '@/components/recipesList/RecipesList'

interface IRecipes {
	searchParams: Promise<{
		query: string
		cuisine: string
		maxReadyTime: string
	}>
}

export default async function Recipes({ searchParams }: IRecipes) {
	const { query, cuisine, maxReadyTime } = await searchParams

	const searchQueryString = `query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}`

	const recipes: Recipe[] = await fetchRecipes(searchQueryString)

	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl font-bold mb-10 mt-5'>Recipes by your request</h1>
			<Suspense fallback={<Loading />}>
				<RecipesList recipes={recipes} />
			</Suspense>
			<Link className='absolute top-5 left-5' href='/'>
				Back
			</Link>
		</div>
	)
}
