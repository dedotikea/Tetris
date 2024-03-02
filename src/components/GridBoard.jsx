import React from 'react'
import GridSquare from './GridSquare'

//generate board tetrisnya (10 * 18 kotak)
const GridBoard = (props) => {
    const grid = []

    //row itu yang vertikal
    for (let row = 0; row < 18; row++) {
        grid.push([])

        //col yang horizontal
        for (let col = 0; col < 10; col++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1"></GridSquare>)
        }

    }
    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}

export default GridBoard