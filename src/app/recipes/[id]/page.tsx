import { RecipeFull } from '@/interfaces/recipe.interface'
import { fetchSingleRecipe } from '@/services/recipes.service'
import Image from 'next/image'
import Link from 'next/link'

interface IRecipePage {
	params: {
		id: string
	}
}

export default async function RecipePage({ params }: IRecipePage) {
	const { id } = await params

	const recipe: RecipeFull = await fetchSingleRecipe(id)

	console.log(recipe)

	return (
		<div className='flex flex-col items-center p-4'>
			<h1 className='text-3xl font-bold mb-10 mt-5'>{recipe.title}</h1>
			<div className='flex flex-col items-center'>
				<Image width={500} height={250} src={recipe.image} alt={recipe.title} />
				<div className='flex items-center gap-10'>
					<h4 className='text-xl font-medium mb-5 mt-5'>
						Preparation time: {recipe.readyInMinutes} minutes
					</h4>
					<h4 className='text-xl font-medium'>Servings: {recipe.servings}</h4>
				</div>
				<h2 className='text-3xl font-bold mb-5 mt-5'>Instructions</h2>
				<div
					className='text-xl mt-5'
					dangerouslySetInnerHTML={{ __html: recipe.instructions }}
				></div>
			</div>

			<Link href='/' className='absolute top-5 left-5'>
				Back to main
			</Link>
		</div>
	)
}
