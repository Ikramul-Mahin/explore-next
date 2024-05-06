import React from 'react';

const DynamicPage = ({params,searchParams}) => {
	console.log(params, searchParams);
	return (
		<div>
			<h1>this is dynamic: {params.id}</h1>
			<h1>search by: {searchParams.category
			}</h1>
		</div>
	);
};

export default DynamicPage;