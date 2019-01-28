import React from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'

export default ({ children }) => {
	return (
		<div>
			<Header />
			{ children }
		</div>
	);
}