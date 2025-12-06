// Декларативный код
import { useState, createElement, Fragment} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyComponent } from "./NewComponent";
// Императивный код
function App() {
	const [count, setCount] = useState(0);
	const year = new Date().getFullYear()
// Декларативный код
	return (
		createElement(
			Fragment,
			null,
			createElement(
				'div',
				null,
                createElement(
				'a',
				{href: "https://vite.dev",target: "_blank"},
					createElement(
						'img',
						{ src: viteLogo, className: "logo", alt: "Vite logo" }
					)
				),
				createElement(
					'a',
					{href: "https://react.dev",target: "_blank"},
					createElement(
						'img',
						{ src: reactLogo, className: "logo react", alt: "React logo" }
					)
				),
		),
		createElement('h1', null, "Vite + React"),
		createElement(
			'div',
			{ className: "card"},
			createElement(
				'button',
				{ onClick: () => setCount((count) => count + 1) },
				`Нажми на счётчик ${count}`
			),
			createElement(
				'p',
				null,
				'Редактируй ', createElement('code', null, 'src/App.jsx'),
				' чтобы протестировать HMR'
			)
		),
		createElement(
			'p',
			null,
			createElement(
				'span',
				{ className: "read-the-docs" },
				"Кликни на Vite или React, чтобы узнать больше"
			)
		),
		createElement(
			'span',
			{ className: "read-the-docs"},
			"Время"
		),
		createElement(
			'br',
		),
		createElement(
			'span',
			{ className: "read-the-docs"},
			`${year}`
		),
		<>
		<MyComponent />
		</>
		),
	);
}

export default App;


