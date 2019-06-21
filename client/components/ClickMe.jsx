import React from 'react'

export default class ClickMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fade: false }
  }

  getCoordinates = () => {
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    return { buttonstyle:{top: randX, left: randY} }
  }

  render() {
    const fade = this.state.fade

    return (
      <button
        style={this.state.buttonstyle}
        ref='button'
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => setTimeout(this.setState({ fade: false, ...getCoordinates() }), 5000)}
        className={fade ? 'fade' : ''}>
        Click me!
      </button>
    )
  }
}