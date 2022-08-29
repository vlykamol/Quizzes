import React from 'react'
import { gameContext } from '../context/Contexts'

export default function Menu() {

  const {setGameStage, setUser} = gameContext();
  return (
    <div className='w-full h-screen grid place-content-center'>
    <div className='bg-black/10 sm:w-96 h-96 flex flex-col gap-2 p-2 m-2 rounded justify-evenly'>
      <h1 className='w-full text-4xl font-bold text-center'>MENU</h1>
      <div className='flex flex-col gap-2'>
      <input 
        className='bg-Con_primary p-2 rounded text-primary' type='text' placeholder='Enter your name '
        onChange={(e) => {
          setUser(e.target.value)
        }}/>
      <button 
        className='bg-Con_primary text-primary p-2 rounded'
        onClick={() => {
          setGameStage('playing')
        }}>Start</button>
      </div>
    </div>
    </div>
  )
}
