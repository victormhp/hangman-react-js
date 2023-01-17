import {
	Stage0,
	Stage1,
	Stage2,
	Stage3,
	Stage4,
	Stage5,
	Stage6,
} from '../assets';

function Hangman({ attempts }) {
	const IMAGES = [Stage0, Stage1, Stage2, Stage3, Stage4, Stage5, Stage6];

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
