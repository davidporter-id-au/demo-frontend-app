import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login';
import Nav from './Nav';
import VPC from './VPC';
import ECS from './ECS';
import Home from './Home';
import Builds from './Builds';

import './App.css';

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  constructor() {
    super();
    this.state = {
      jwt: "",
    }
  }

  login(username, password) {
    return new Promise((res, rej) => {
      res();
    });
  }

  navSelect = (event, key) => {
    console.log("nav sel", event, key)
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <Nav />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/vpc" component={VPC} />
              <Route path="/ecs" component={ECS} />
              <Route path="/builds" component={Builds} />
            </div>
          </Router>
          <Login onSubmit={this.login} />
        </div>
      </div>
    );
  }
}

export default App;
