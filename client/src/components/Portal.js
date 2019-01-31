import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Portal extends Component {
	render() {
		return <div> this is the portal </div>
	}
}

export default requireAuth(Portal);