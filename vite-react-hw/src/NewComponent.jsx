import { useState } from "react"
import styles from "./NewComponent.module.css"

const getTimeFromDate = (date) => String(date).substring(15,24);

export const MyComponent = (props) => {
	const [currentDate, setCurrentDate] = useState(new Date());
	setTimeout(() => {
		setCurrentDate(new Date());
		console.log(currentTime)
	}, 1000)

	let [value, setValue] = useState(0)
	const onClick = () => {
		setValue((updatedValue) => updatedValue + 1)
		setValue((updatedValue) => updatedValue + 1)
		setValue((updatedValue) => updatedValue + 1)
	};

	const [showText, setShowText] = useState(true);
	const twoOnClick = () => {
		setShowText(!showText)
	}

	const currentTime = getTimeFromDate(currentDate)

	const [showGreenText, setShowGreenText] = useState(false);
	const threeClick = () => {
		setShowGreenText(!showGreenText)
	};
	const text = <div className={ showGreenText ? styles.green : styles.white }>Меняю цвет текста кнопки и текста выше</div>;

	return (
		<>
			<div>value = { value }</div>
			<button onClick={onClick}>Прибавь к value +1</button>
			<div className="read-the-docs" >{currentTime}</div>
			{showText && <div> Текст </div>}
			<button onClick={twoOnClick}>{showText ? 'Скрыть' : 'Показать'} текст</button>
			<br />
			<br />
			<br />
			{text}
			<button onClick={threeClick}>{text}</button>
		</>
	)
};

