import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {
  return (
    <>
      <h1>Anti-personality Test</h1>
      <form>
{props.answers.map(answer => {
  return (
    <div className="radio">
    <label>
      <input type="radio" name="bob" value="option1" checked={false} />
      test
    </label>
  </div>
  )
})}
      </form>
    </>
  )
}

export default Question