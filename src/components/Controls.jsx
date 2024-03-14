import React from 'react'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import controlSound from "../assets/sounds/soft-hitnormal.mp3"
import useSound from 'use-sound'

const Controls = (props) => {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)
    const [playSound] = useSound(controlSound)
    return (
        <div className="controls">
            {/* left */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    playSound()
                    if (!isRunning || gameOver) { return }
                    dispatch(moveLeft())
                }}>Kiri</button>

            {/* right */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    playSound()
                    if (!isRunning || gameOver) { return }
                    dispatch(moveRight())
                }}>Kanan</button>

            {/* rotate */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    playSound()
                    if (!isRunning || gameOver) { return }
                    dispatch(rotate())
                }}>Putar</button>

            {/* down */}
            <button
                disabled={!isRunning || gameOver}
                className="control-button"
                onClick={(e) => {
                    playSound()
                    if (!isRunning || gameOver) { return }
                    dispatch(moveDown())
                }}>Bawah</button>

        </div>
    )
}

export default Controls