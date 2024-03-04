import React from 'react'
import { moveDown, moveLeft, moveRight, rotate } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const Controls = (props) => {
    const dispatch = useDispatch()
    const isRunning = useSelector((state) => state.isRunning)
    return (
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}>Kiri</button>

            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}>Kanan</button>

            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}>Putar</button>

            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}>Bawah</button>

        </div>
    )
}

export default Controls