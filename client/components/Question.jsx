
import React from 'react'
import { randomBytes } from 'crypto';
import { Link } from 'react-router-dom'


const colorArr = [
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
  "theme-5",
  "theme-6",
  "theme-7",
  "theme-8",
  "theme-9",
  "theme-10",
  "theme-11",
]
const randomColor = () => {
  return colorArr[Math.round(Math.random() * 10) + 1]
}


const Question = (props) => {
  let theme = randomColor()
  const id = Number(props.match.params.id)
  return (
    <>
      <h1 className="head center">ANTI-PERSONALITY TEST</h1>
      <h2 className={'question center ' + theme}>{props.data[id].question}</h2>
      <form className={'answerContainer center ' + theme}>
        {props.data[id].answers.map((answer, i) => {
          return (
            <label className="answer container" key={i}>
              <input className="radio" type="radio" name={`question${id}`} value={i} id={i} onChange={props.handleChange} />
              <span class="checkmark"></span>{answer}
            </label>

          )
        })}
      </form>
      <div className="center next">
        {id === 10 ? <Link className="center" to={`/profile`}><button>Submit</button></Link> : <Link className="center" to={`/${id + 1}`}><button>Next</button></Link>}
      </div>
    </>
  )
}
export default Question