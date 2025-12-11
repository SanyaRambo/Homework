// Декларативный код
import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import { MyComponent } from "./NewComponent";
// Императивный код
function App() {
	const [count, setCount] = useState(0);
	const year = new Date().getFullYear();
	// Декларативный код
	return (
		<Fragment>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className={styles.logo} alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className={styles.logo.react}
						alt="React logo"
					/>
				</a>
			</div>

			<h1>Vite + React</h1>

			<div className={styles.card}>
				<button onClick={() => setCount((count) => count + 1)}>
					Нажми на счётчик {count}
				</button>
				<p>
					Редактируй <code>src/App.jsx</code> чтобы протестировать HMR
				</p>
			</div>

			<p>
				<span className={styles.readTheDocs}>
					Кликни на Vite или React, чтобы узнать больше
				</span>
			</p>

			<span className={styles.readTheDocs}>Время</span>
			<br />
			<span className={styles.readTheDocs}>{year}</span>

			<MyComponent/>
		</Fragment>
	);
}

export default App;
