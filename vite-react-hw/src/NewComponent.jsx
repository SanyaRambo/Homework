import { useEffect } from "react"


export const MyComponent = (props) => {
	const date = new Date()

	useEffect(() => {
		console.log(date)
	}), [];

	return (
		<>
			<div className="read-the-docs" >{String(date)}</div>
		</>
	)
};

