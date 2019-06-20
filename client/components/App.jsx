import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home'
import Question from './Question'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (event) => {
    console.log(event)
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={(routeProps) => (
            <Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...routeProps} />
          )} />
          <Route path="/:id" render={(routeProps) => (
            <Question data={data} handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...routeProps} />
          )} />
          <Route path="/profile" render={(routeProps) => (
            <Profile data={data} {...routeProps} />
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
