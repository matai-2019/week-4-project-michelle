import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
    <h1 className="head center">ANTI-PERSONALITY TEST</h1>
      <form className="center" onSubmit={props.handleSubmit}>
        <label>
          please enter ur name <br></br>
          <input type="text" name='name' placeholder="name pls" onChange={props.handleChange} />
        </label>
        <Link to={`/0`}><button>b u t t on</button></Link>
      </form>
    </>
  )
}

export default Home