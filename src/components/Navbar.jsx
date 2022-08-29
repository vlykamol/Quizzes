import React from 'react'
import { gameContext } from '../context/Contexts'
import { questions } from '../Questions'

export default function Navbar() {
  const {user, gameStage, currentQue, score} = gameContext()
  return (
    <div className='bg-secondary p-2 flex justify-between items-center'>
      <h1>Quizz</h1>
      {gameStage}
      {score}
      <h1>question: {currentQue + 1}/{questions.length}</h1>
      <h1>timer: {`00:00`}</h1>
      <h1 className='bg-primary/75 p-2 rounded-md'>{user}</h1>
    </div>
  )
}