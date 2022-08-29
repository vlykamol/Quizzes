import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Questions from './components/Questions'
import Leaderbord from './components/Leaderbord'
import { gameContext } from './context/Contexts'

function App() {
  const {gameStage} = gameContext()
  return (
    <div className="App text-Con_primary">
        <Navbar />
        {gameStage === 'menu' && <Menu />}
        {gameStage === 'playing' && <Questions />}
        {gameStage === 'finished' && <Leaderbord />}
    </div>
  )
}

export default App
