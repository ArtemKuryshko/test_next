import { FC } from 'react'

interface ISelect {
	options: string[]
	id?: string
	name: string
	placeholder?: string
	className?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<ISelect> = ({
	options,
	id,
	name,
	className,
	value,
	onChange
}) => {
	return (
		<select
			id={id}
			name={name}
			className={`${className} border-2 border-gray-800 rounded p-2`}
			value={value}
			onChange={onChange}
		>
			{options.map(option => (
				<option className='bg-gray-900' value={option} key={option}>
					{option}
				</option>
			))}
		</select>
	)
}

export default Select
