import { Gallow, Head, LArm, RArm, LLeg, RLeg } from '../assets';

function Hangman({ attempts }) {
	const IMAGES = [Gallow, Head, LArm, RArm, LLeg, RLeg];

	return (
		<div>
			<img
				src={attempts > 0 ? IMAGES[attempts] : IMAGES[0]}
				alt='Hangman'
				className='w-48 sm:w-60 md:w-80'
			/>
		</div>
	);
}

export default Hangman;
