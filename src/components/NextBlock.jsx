import React from 'react'
import GridSquare from './GridSquare'

//generate preview tetromino selanjutnya (4 * 4 box)
const NextBlock = (props) => {
    const box = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

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