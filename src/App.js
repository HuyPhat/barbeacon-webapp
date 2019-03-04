import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DemoPage from "pages/demo";
import LandingPage from "pages/landing";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/demo" component={DemoPage} />
        </div>
      </Router>
    );
  }
}

export default App;
