import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps) => async dispatch => {

	console.log('sending: ' + JSON.stringify(formProps))
	
	try{ 
		const response = await axios.post('http://localhost:5000/signup', { formProps })
		dispatch({ type: AUTH_USER, payload: response.data.token })
	} catch(e) {
		dispatch({type: AUTH_ERROR, payload: 'Email in use'})
	}
};
