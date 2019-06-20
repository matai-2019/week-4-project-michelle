import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home'
import Question from './Question'
import data from '../../data.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
            <Question data={data.questions} handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...routeProps} />
          )} />
          <Route path="/profile" render={(routeProps) => (
            <Profile profile={data.profile} name={this.state.name} {...routeProps} />
          )} />
        </Switch>
      </Router>
    )
  }
}

export default App
