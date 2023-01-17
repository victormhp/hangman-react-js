function Keyboard({
	disabled = false,
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
}) {
	const KEYS = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm'],
	];

	return (
		<div className='flex flex-col gap-2 md:gap-4 items-center'>
			{KEYS.map((_, row) => (
				<div className='flex gap-1 md:gap-2' key={row}>
					{KEYS[row].map((key, index) => {
						const isActive = activeLetters.includes(key);
						const isInactive = inactiveLetters.includes(key);

						return (
							<button
								className={`border border-neutral-900 py-2 px-3 rounded font-medium text-keyboard uppercase cursor-pointer 
									${isInactive && 'opacity-30'}
									${isActive && 'bg-emerald-400'}
									${!isInactive && !isActive && 'hover:bg-neutral-300 duration-200'}`}
								onClick={() => addGuessedLetter(key)}
								disabled={isInactive || isActive || disabled}
								key={index}
							>
								{key}
							</button>
						);
					})}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
