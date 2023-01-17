function Outcome({ isWinner }) {
	const handleClick = () => {
		window.location.reload();
	};

	return (
		<button
			className={`text-neutral-100 font-semibold uppercase px-8 py-2 rounded ${
				isWinner
					? 'bg-emerald-500 hover:bg-emerald-600 duration-200'
					: 'bg-red-500 hover:bg-red-600 duration-200'
			}`}
			onClick={handleClick}
		>
			{isWinner ? 'You won!' : 'You lost!'}
			<br />
			Try Again...
		</button>
	);
}

export default Outcome;
