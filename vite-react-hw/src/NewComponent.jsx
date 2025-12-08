import { useState } from "react"

const products = [
	{id: 'wasd', name: 'Клавиатура'},
	{id: 'dldo', name: 'Дилдо'}
]

export const MyComponent = (props) => {


	return (
		<>
			<ul>
				{products.map(({id, name}) => (<li key={id}>{ name }</li>))}
			</ul>

		</>
	)
};

