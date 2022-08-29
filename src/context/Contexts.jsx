import React, { createContext, useContext, useState } from 'react'
import useLocalStorage from './LocalContext'

const GameContext = createContext(null)

export function gameContext() {
  return useContext(GameContext)
}

export function ContextProvider({children}) {

  const [gameStage, setGameStage] = useLocalStorage('stage','menu')
  const [user, setUser] = useLocalStorage('user','')
  const [score, setScore] = useState(0)
  const [currentQue, setCurrentQue] = useState(0);
  const [isCompleted, setIsCompleted] = useState({});

  const value = {
    gameStage,
    setGameStage,
    user,
    setUser,
    score,
    setScore,
    currentQue,
    setCurrentQue
  }

  return <GameContext.Provider value={value}>
    {children}
  </GameContext.Provider>
}