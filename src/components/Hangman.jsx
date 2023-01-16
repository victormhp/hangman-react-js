import { Gallow, Head, LArm, RArm, LLeg, RLeg } from '../assets';

function Hangman() {
	const images = [Gallow, Head, LArm, RArm, LLeg, RLeg];
	return (
		<div>
			<img src={RLeg} alt='Hangman' className='w-full' />
		</div>
	);
}

export default Hangman;
