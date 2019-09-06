import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Index from "./homeComponets/homeIndex";
import message from "antd/lib/message";
import history from '../js/history';
import 'antd/dist/antd.css';
import "../css/common.css";
import "../css/main.css";

message.config({
  top: 50,
  duration: 2,
  maxCount: 1,
});
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Index} exact/>
        </Switch>
      </Router>
    );
  }
}

export default App;
