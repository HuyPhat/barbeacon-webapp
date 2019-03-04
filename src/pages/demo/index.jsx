import React from "react";
import logo from "logo.svg";
import "App.css";
import { Button } from "antd";
import { observer } from "mobx-react";

const DemoPage = observer(({ timerData }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button type="primary">Primary</Button>
    </header>
  </div>
));

export default DemoPage;
