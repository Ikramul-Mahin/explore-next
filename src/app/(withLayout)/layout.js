import React from 'react';

const Layout = ({children}) => {
	return (
		<div>
			<h2>header</h2>
			{children}
			<h2>foter</h2>
		</div>
	);
};

export default Layout;