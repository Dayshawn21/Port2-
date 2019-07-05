import React from 'react';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Header from './layout/Header';

import Project from './layout/Project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Form from './layout/Form';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />

				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/about" component={About} />
					<Route exact path="/project" component={Project} />
					<Route exact path="/contact" component={Form} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
