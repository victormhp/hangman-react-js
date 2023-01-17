import useFetch from './hooks/useFetch';
import { useState, useEffect, useCallback } from 'react';
import { Hangman, Word, Keyboard } from './components';
import './App.css';

function App() {
	const wordToGuess = useFetch();
	const [guessedLetters, setGuessedLetters] = useState([]);
	const incorrectLetters = guessedLetters.filter(
		letter => !wordToGuess.includes(letter)
	);

	const isLoser = incorrectLetters.length >= 5;
	const isWinner = wordToGuess
		.split('')
		.every(letter => guessedLetters.includes(letter));
	console.log(isLoser);
	console.log(incorrectLetters);
	const addGuessedLetter = useCallback(
		letter => {
			if (guessedLetters.includes(letter) || isLoser || isLoser) return;
			setGuessedLetters(currLetters => [...currLetters, letter]);
		},
		[guessedLetters, isLoser, isWinner]
	);

	useEffect(() => {
		const handler = event => {
			const key = event.key;

			if (!key.match(/^[a-z]$/)) return;

			event.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener('keypress', handler);

		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [guessedLetters]);

	return (
		<main className='max-w-5xl flex flex-col gap-12 mx-auto my-8 justify-center items-center'>
			<Hangman attempts={incorrectLetters.length} />
			<Word
				answer={isLoser}
				guessedLetters={guessedLetters}
				wordToGuess={wordToGuess}
			/>
			<Keyboard
				disabled={isLoser || isWinner}
				activeLetters={guessedLetters.filter(l => wordToGuess.includes(l))}
				inactiveLetters={incorrectLetters}
				addGuessedLetter={addGuessedLetter}
			/>
		</main>
	);
}

export default App;
