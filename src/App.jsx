
import './App.css'
import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>USK-Tetris: Muhammad Rayhan Gustiar (0618101050)</h1>
      </header>
      <GridBoard></GridBoard>
      <NextBlock></NextBlock>
      <ScoreBoard></ScoreBoard>
    </div>
  )
}

export default App
