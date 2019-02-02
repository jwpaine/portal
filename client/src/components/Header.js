import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return (	
				<div>
					<Link to="/signout">Signout</Link>
					<Link to="/portal">Portal</Link>
				</div>
			)

		}

		return (
			<div>
				<Link to="/signup">Sign Up</Link>
				<Link to="/signin">Sign In</Link>
			</div>
		)
	}
	render() {
		return (
			<div>
				<Link to="/">Redux Auth</Link>
				{ this.renderLinks() }

				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);