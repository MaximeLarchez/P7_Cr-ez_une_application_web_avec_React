import React, {useState, useEffect } from 'react';

function Logement(){
	const [data, setData] = useState(null);

useEffect(() => {
	fetch('data.json')
	.then((res) => {
		console.log(res)
		setData(res.data)
	})
	.then((json) => setData(json))
	.catch((error) => console.error(error));
	
}, []);

if(!data){
	return(
		<div>Loading...</div>
	);
}

}

export default Logement;

