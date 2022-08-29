import React from 'react'
import { gameContext } from '../context/Contexts'

export default function Leaderbord() {
  const { user, score } = gameContext();

  return (
    <div className='w-full h-screen grid place-content-center'>
    <div className='bg-black/10 sm:w-96 h-96 flex flex-col gap-2 p-2 m-2 rounded justify-evenly'>
      <h1 className='w-full text-4xl font-bold text-center'>Score Bord</h1>
      <div className='flex flex-col gap-2'>
      {user} : {score}
      </div>
    </div>
    </div>
  )
}
