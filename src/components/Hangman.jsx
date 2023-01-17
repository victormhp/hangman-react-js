import { Gallow, Head, LArm, RArm, LLeg, RLeg } from '../assets';

function Hangman({ attempts }) {
	const IMAGES = [Gallow, Head, LArm, RArm, LLeg, RLeg];

	return (
		<div>
			<img
				src={attempts > 0 ? IMAGES[attempts] : IMAGES[0]}
				alt='Hangman progress'
				className='w-60 md:w-80'
			/>
		</div>
	);
}

export default Hangman;
