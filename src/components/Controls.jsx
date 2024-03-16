import React, { useEffect } from 'react'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import controlSound from "../assets/sounds/soft-hitnormal.mp3"
import useSound from 'use-sound'

const Controls = (props) => {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)
    const [playSound] = useSound(controlSound)

    //keyboard handler
    const keyDown = (e) => {
        if (e.key === "ArrowLeft" && isRunning && !gameOver) {
            playSound()
            dispatch(moveLeft())
        }
        if (e.key === "ArrowUp" && isRunning && !gameOver) {
            playSound()
            dispatch(rotate())
        }
        if (e.key === "ArrowDown" && isRunning && !gameOver) {
            playSound()
            dispatch(moveDown())
        }
        if (e.key === "ArrowRight" && isRunning && !gameOver) {
            playSound()
            dispatch(moveRight())
        }
    }

    //limit jadi 1 aja
    useEffect(() => {
        document.addEventListener("keydown", keyDown)
        return () => document.removeEventListener("keydown", keyDown);
    }, [keyDown])


    return (
        <>

            <div className="controls">

                {/* kiri */}
                <button
                    disabled={!isRunning || gameOver}
                    className="control-button"
                    onClick={(e) => {
                        playSound()
                        if (!isRunning || gameOver) { return }
                        dispatch(moveLeft())
                    }}>Kiri</button>

                {/* kanan */}
                <button
                    disabled={!isRunning || gameOver}
                    className="control-button"
                    onClick={(e) => {
                        playSound()
                        if (!isRunning || gameOver) { return }
                        dispatch(moveRight())
                    }}>Kanan</button>

                {/* putar */}
                <button
                    disabled={!isRunning || gameOver}
                    className="control-button"
                    onClick={(e) => {
                        playSound()
                        if (!isRunning || gameOver) { return }
                        dispatch(rotate())
                    }}>Putar</button>

                {/* bawah */}
                <button
                    disabled={!isRunning || gameOver}
                    className="control-button"
                    onClick={(e) => {
                        playSound()
                        if (!isRunning || gameOver) { return }
                        dispatch(moveDown())
                    }}>Bawah</button>

            </div>
        </>
    )
}

export default Controls