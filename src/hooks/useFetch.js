import { useState, useEffect } from 'react';

const useFetch = () => {
	const [data, setData] = useState('');

	const request = () => {
		const id = Math.floor(Math.random() * 150 + 1);

		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then(response => response.json())
			.then(data => setData(data.name))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		request();
	}, []);

	return data;
};

export default useFetch;
