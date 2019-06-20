import React from 'react'
import { Link } from 'react-router-dom'

const Question = (props) => {
  const id = Number(props.match.params.id)
  return (
    <>
      <h1>Anti-personality Test</h1>
      <h2>{props.data[id].question}</h2>
      <form>
{props.data[id].answers.map((answer, i) => {
  return (
    <div className="radio">
    <label>
      <input type="radio" name={`question${id}`} value={i} onChange={props.handleChange} checked={false} />
      {answer}
    </label>
  </div>
  )
})}
<Link to={`/${id + 1}`}><button>Next</button></Link>
      </form>
    </>
  )
}

export default Question