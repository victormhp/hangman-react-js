import useFetch from './hooks/useFetch';
import { useState, useEffect } from 'react';
import { Hangman, Word, Keyboard } from './components';
import './App.css';

function App() {
	const { request, data } = useFetch();

	useEffect(() => {
		request();
	}, []);

	const [guessedLetters, setGuessedLetters] = useState([]);

	return (
		<div className='max-w-4xl flex flex-col gap-2 mx-auto items-center'>
			<Hangman />
			<Word />
			<Keyboard />
		</div>
	);
}

export default App;
