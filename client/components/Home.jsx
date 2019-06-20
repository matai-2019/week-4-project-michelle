import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
      <h1>Anti-personality Test</h1>
      <form onSubmit={props.handleSubmit}>
        <label>
          Please enter your name:
          <input type="text" name='name' onChange={props.handleChange} />
        </label>
        <Link to={`/0`}><button>Next</button></Link>
      </form>
    </>
  )
}

export default Home