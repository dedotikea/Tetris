import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pause, resume, restart } from '../actions'
import completeSound from "../assets/sounds/soft-hitfinish.mp3"
import useSound from 'use-sound'

const ScoreBoard = (props) => {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game
    const [playCompleteSound] = useSound(completeSound)
    useEffect(() => {
        playCompleteSound()
    }, [score])

    return (
        <div className="score-board">
            <div>Score:{score}</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'Pause' : 'Play'}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
        </div>
    )
}

export default ScoreBoard