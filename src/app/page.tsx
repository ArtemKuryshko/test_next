import CustomForm from '@/components/form/CustomForm'

export default function Home() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<h1 className='text-3xl font-bold mb-10'>Search for recipes</h1>

			<CustomForm action_url='/recipes' />
		</div>
	)
}
