import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DemoPage from "pages/demo";
import LandingPage from "pages/landing";
import LoginPage from "pages/login";
import MobxDemo from "pages/mobxdemo";
import { Provider } from "mobx-react";
import stores from "stores/index.js";

const App = () => {
	return (
		<Provider {...stores}>
			<Router>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/demo" component={DemoPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/mobxdemo" component={MobxDemo} />
				</div>
			</Router>
		</Provider>
	);
};
export default App;
