import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup'

import Portal from './components/Portal'
import Signout from './components/auth/Signout'

const store = createStore(reducers,{
	auth: { authenticated: localStorage.getItem('token') }
}, applyMiddleware(reduxThunk))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App >
				<Route path="/" exact component={Welcome} />
				<Route path="/signup" component={props => <Signup/>} /> 
				<Route path="/portal" component={Portal} />
				<Route path="/signout" component={Signout} />
			</App >
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
)

