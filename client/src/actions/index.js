import axios from 'axios'
import { AUTH_USER } from './types';

export const signup = (formProps) => dispatch => {

	console.log('sending: ' + JSON.stringify(formProps))
	axios.post('http://localhost:5000/signup', {
		formProps
	})
};
