import React from 'react'
import { Link } from 'react-router-dom'

const random = (length) => {
  return Math.floor(Math.random()  * Math.floor(length))
}

const Home = (props) => {
  const profile = props.profile.[0]
  return (
    <>
      <h1>Anti-personality Test</h1>
      <h3>{`${props.name}, here is your personality`}</h3>
      <div>
        <p>Spirit Animal: {profile.spiritAnimal}</p>
      </div>
    </>
  )
}

export default Home