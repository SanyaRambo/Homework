import { useState } from "react"

const getTimeFromDate = (date) => String(date).substring(15,24);

export const MyComponent = (props) => {

	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date());
		console.log(currentTime)
	}, 1000)


	const currentTime = getTimeFromDate(currentDate)

	return (
		<>
			<div className="read-the-docs" >{currentTime}</div>
		</>
	)
};

