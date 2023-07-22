import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/"><News key={1} apiKey={this.apiKey} pageSize={15} country="us" category="general" /></Route>
          <Route exact path="/business"><News key={2} apiKey={this.apiKey} pageSize={15} country="us" category="business" /></Route>
          <Route exact path="/entertainment"><News key={3} apiKey={this.apiKey} pageSize={15} country="us" category="entertainment" /></Route>
          <Route exact path="/health"><News key={4} apiKey={this.apiKey} pageSize={15} country="us" category="health" /></Route>
          <Route exact path="/science"><News key={5} apiKey={this.apiKey} pageSize={15} country="us" category="science" /></Route>
          <Route exact path="/sports"><News key={6} apiKey={this.apiKey} pageSize={15} country="us" category="sports" /></Route>
          <Route exact path="/technology"><News key={7} apiKey={this.apiKey} pageSize={15} country="us" category="technology" /></Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
