import React from 'react'

export default class ClickMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonstyle: { top: 0, left: 50, position: 'relative' }
    }
  }

  getCoordinates = () => {
    const randX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randY = Math.floor(Math.random() * (window.innerHeight - 100));
    this.setState({ buttonstyle: { top: randX, left: randY, position: 'absolute' } })
  }

  render() {

    return (
      <button
        className="next"
        style={this.state.buttonstyle}
        onMouseEnter={this.getCoordinates}>
        Email your friends
      </button>
    )
  }
}