import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pauseGame, resume, restart } from '../actions'
import completeSound from "../assets/sounds/soft-hitfinish.mp3"
import bgmSound from "../assets/sounds/bgm.mp3"
import useSound from 'use-sound'

const ScoreBoard = (props) => {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game

    const [playCompleteSound] = useSound(completeSound)

    // const bgmAudio = useRef(new Audio(bgmSound)).current
    // bgmAudio.load()
    const [isBgmPlaying, setIsBgmPlaying] = useState(false)
    const audioRef = useRef()

    const startBgm = () => {
        audioRef.current.play()
        setIsBgmPlaying(true)
    }

    const pauseBgm = () => {
        audioRef.current.pause()
        setIsBgmPlaying(false)
    }

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
                    dispatch(pauseGame())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? 'Pause' : 'Play'}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
            <audio ref={audioRef} src={bgmSound}></audio>
            {isBgmPlaying ? (
                <button onClick={pauseBgm} className="score-board-button">
                    Music: Playing
                </button>
            ) : (<button onClick={startBgm} className="score-board-button">
                Music: Paused
            </button>)}
        </div>
    )
}

export default ScoreBoard