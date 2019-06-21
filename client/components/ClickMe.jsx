import React, { Component } from 'react'

export default class ClickMe extends Component {
  constructor(props) {
    super(props)
    this.state = { fade: false }
  }
  render() {
    const fade = this.state.fade

    return (
      <button
        ref='button'
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => setTimeout(this.setState({ fade: false }), 5000)}
        className={fade ? 'fade' : ''}>
        Click me!
      </button>
    )
  }
}