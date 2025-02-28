import { FC } from 'react'

interface IInput {
	id?: string
	name: string
	placeholder?: string
	className?: string
	type?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = ({
	type = 'text',
	id,
	name,
	className,
	placeholder,
	value,
	onChange
}) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={placeholder}
			className={`${className} border-2 border-gray-800 rounded p-2`}
			value={value}
			onChange={onChange}
		/>
	)
}

export default Input
