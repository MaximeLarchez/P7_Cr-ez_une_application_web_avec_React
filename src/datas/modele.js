import React, {useState, useEffect } from 'react';

function Logement(){
	const [data, setData] = useState(null);

useEffect(() => {
	fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
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

