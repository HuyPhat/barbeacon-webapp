import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DemoPage from "pages/demo";
import LandingPage from "pages/landing";
import LoginPage from "pages/login";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/demo" component={DemoPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    </Router>
  );
};
export default App;
