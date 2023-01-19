import useFetch from './hooks/useFetch';
import { useState, useEffect, useCallback } from 'react';
import { Header, Hangman, Word, Keyboard, Outcome, Footer } from './components';
import './App.css';

function App() {
	const [wordToGuess, setWordToGuess] = useState('');
	const data = useFetch();

	useEffect(() => {
		setWordToGuess(data);
	}, [data]);

	const [guessedLetters, setGuessedLetters] = useState([]);
	const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

	const isLoser = incorrectLetters.length >= 6;
	const isWinner =
		wordToGuess && wordToGuess.split('').every(letter => guessedLetters.includes(letter));

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
		<>
			<Header />
			<main className='max-w-5xl flex flex-col gap-8 mx-auto my-10 items-center'>
				<Hangman incorrect={incorrectLetters.length} />
				<Word answer={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
				{isLoser || isWinner ? (
					<Outcome
						isWinner={isWinner}
						setWordToGuess={setWordToGuess}
						resetGuessedLetters={setGuessedLetters}
					/>
				) : (
					<Keyboard
						disabled={isLoser || isWinner}
						activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
						inactiveLetters={incorrectLetters}
						addGuessedLetter={addGuessedLetter}
					/>
				)}
			</main>
			<Footer />
		</>
	);
}

export default App;
