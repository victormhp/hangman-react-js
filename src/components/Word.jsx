function Word({ answer = false, guessedLetters, wordToGuess }) {
	return (
		<div className='flex gap-4 font-bold text-word uppercase'>
			{wordToGuess.split('').map((letter, index) => (
				<span className='border-b-2 border-neutral-900' key={index}>
					<span
						className={`${guessedLetters.includes(letter) || answer ? 'visible' : 'invisible'}
							${!guessedLetters.includes(letter) && answer ? 'text-red-500' : 'text-neutral-900'}`}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}

export default Word;
