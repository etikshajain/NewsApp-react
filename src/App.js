import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize=12;
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News key="general" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="general"/>
          </Route>
          <Route exact path="/business">
            <News key="business" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="business"/>
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="entertainment"/>
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="general"/>
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="health"/>
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="science"/>
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="sports"/>
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={this.pageSize} country="in" apiKey={this.apiKey} category="technology"/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}


