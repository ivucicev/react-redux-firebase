import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar></Navbar>
					<Switch>
						<Route exact path='/' component={Dashboard} />
						<Route path='/project/:id' component={ProjectDetail} />
						<Route path='/signin' component={SignIn} />
						<Route path='/signup' component={SignUp} />
						<Route path='/create-project' component={CreateProject} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;