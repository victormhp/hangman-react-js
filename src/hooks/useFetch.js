import { useState, useEffect } from 'react';

const useFetch = () => {
	const [data, setData] = useState('');

	useEffect(() => {
		const options = {
			parameters: {
				type: 'verb',
			},
			headers: {
				'X-Api-Key': 'UFI1qQIcCFsgWBXWT46zPysaT71FSATN6N0rWvBW',
			},
		};

		fetch('https://api.api-ninjas.com/v1/randomword', options)
			.then(response => response.json())
			.then(response => setData(response.word))
			.catch(error => console.log(error));
	}, []);

	return data;
};

export default useFetch;
