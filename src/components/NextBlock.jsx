import React from 'react'
import GridSquare from './GridSquare'
import { useSelector } from 'react-redux'
import { shapes } from '../utils'

//generate preview tetromino selanjutnya (4 * 4 box)
const NextBlock = (props) => {
    const nextShape = useSelector((state) => state.game.nextShape)
    const box = shapes[nextShape][0]

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square}></GridSquare>
        })
    })
    return (
        <div className='next-block'>
            {grid}
        </div>
    )
}

export default NextBlock