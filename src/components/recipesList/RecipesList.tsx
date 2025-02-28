import { Recipe } from '@/interfaces/recipe.interface'
import { FC } from 'react'
import Link from 'next/link'

interface IRecipesList {
	recipes: Recipe[]
}

const RecipesList: FC<IRecipesList> = ({ recipes }) => {
	return (
		<div className='flex flex-col'>
			{recipes.map(recipe => (
				<Link
					href={`/recipes/${recipe.id}`}
					key={recipe.id}
					className='mb-10 shadow-2xl shadow-cyan-950 border-2 border-gray-800 p-2 rounded'
				>
					<h3 className='text-xl mb-5 font-medium'>{recipe.title}</h3>
					<img
						className='border-2 border-gray-800 rounded'
						width='100%'
						src={recipe.image}
						alt={recipe.title}
					/>
				</Link>
			))}
		</div>
	)
}

export default RecipesList
