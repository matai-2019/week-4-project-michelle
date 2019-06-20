import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <h1>Anti-personality Test</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          Please enter your name:
          <input type="text" onChange={props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Home