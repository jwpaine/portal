import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; // ES6
import * as actions from '../../actions'

class Signin extends Component {

 
static contextTypes = {
    router: PropTypes.object
}
 
onSubmit = formProps => {
    this.props.signin(formProps, () => {
        this.context.router.history.push('/portal');
    });
};
	

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label>Email</label>
					<Field
						name="email"
						type="text"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<fieldset>
					<label>Password</label>
					<Field
						name="password"
						type="password"
						component="input"
						autoComplete="none"
					/>
				</fieldset>
				<div>{this.props.errorMessage}</div>
				<button>Sign In!</button>

			</form>
		)
	}
}

function mapeStateToProps(state) {
	return { errorMessage: state.auth.errorMessage }
}

export default compose(
	connect(mapeStateToProps, actions),
	reduxForm({ form: 'signin' })
)(Signin);