'use client'

import { FC, useEffect, useState } from 'react'
import Form from 'next/form'
import Input from '@/components/UI/Input'
import Select from '@/components/UI/Select'

interface ICustomForm {
	action_url: string
	className?: string
}

const CustomForm: FC<ICustomForm> = ({ action_url, className }) => {
	const cuisineOptions = ['British', 'French', 'German', 'Italian', 'Japanese']

	const [query, setQuery] = useState('')
	const [cuisine, setCuisine] = useState('')
	const [maxReadyTime, setMaxReadyTime] = useState('')

	const [isDisabled, setIsDisabled] = useState(true)

	useEffect(() => {
		if (query.length > 0 || cuisine.length > 0 || maxReadyTime.length > 0) {
			setIsDisabled(false)
		} else {
			setIsDisabled(true)
		}
	}, [query, cuisine, maxReadyTime])

	return (
		<Form
			action={action_url}
			className={`${className} flex flex-col border-2 border-gray-800 shadow-2xl shadow-cyan-950 p-4 rounded`}
		>
			<label className='p-2 text-xl font-bold' htmlFor='query'>
				Enter a recipe name
			</label>
			<Input
				type='text'
				id='query'
				name='query'
				placeholder='Pasta'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>

			<label className='p-2 text-xl font-bold' htmlFor='cuisine'>
				Select a preferred cuisine
			</label>
			<Select
				options={cuisineOptions}
				id='cuisine'
				name='cuisine'
				value={cuisine}
				onChange={e => setCuisine(e.target.value)}
			/>

			<label className='p-2 text-xl font-bold' htmlFor='maxReadyTime'>
				Select the maximum preparation time (in minutes)
			</label>
			<Input
				type='number'
				id='maxReadyTime'
				name='maxReadyTime'
				placeholder='10'
				value={maxReadyTime}
				onChange={e => setMaxReadyTime(e.target.value)}
			/>

			<button
				disabled={isDisabled}
				className='disabled:bg-gray-500 mt-10 p-2 text-gray-900 bg-white rounded'
				type='submit'
			>
				Next
			</button>
		</Form>
	)
}

export default CustomForm
