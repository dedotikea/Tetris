
import { Provider } from 'react-redux'
import './App.css'
import Controls from './components/Controls'
import GridBoard from './components/GridBoard'
import MessagePopup from './components/MessagePopup'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import { configureStore, createStore } from '@reduxjs/toolkit'
import reducers from './reducers'

const store = createStore(reducers)

function App() {

  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <h4 className='App-title'>USK-Tetris: Muhammad Rayhan Gustiar (0618101050)</h4>
        </header>
        <GridBoard></GridBoard>
        <NextBlock></NextBlock>
        <ScoreBoard></ScoreBoard>
        <Controls></Controls>
        <MessagePopup></MessagePopup>
      </div>
    </Provider>
  )
}

export default App
