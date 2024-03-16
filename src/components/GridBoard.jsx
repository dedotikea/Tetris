import React, { useEffect, useRef } from 'react'
import GridSquare from './GridSquare'
import { useDispatch, useSelector } from 'react-redux'
import { shapes } from '../utils'
import { moveDown } from '../actions'

//generate board tetrisnya (10 * 18 kotak)
const GridBoard = (props) => {

    //ref untuk move handler
    const requestRef = useRef()
    const lastUpdateTimeRef = useRef(0)
    const progressTimeRef = useRef(0)
    const dispatch = useDispatch()

    const game = useSelector((state) => state.game)
    const { grid, shape, rotation, x, y, isRunning, speed } = game
    const block = shapes[shape][rotation]
    const blockColor = shape
    // map rows
    const gridSquares = grid.map((rowArray, row) => {
        // map columns
        return rowArray.map((square, col) => {
            const blockX = col - x
            const blockY = row - y
            let color = square
            if (blockX >= 0 && blockX < block.length && blockY >= 0 && blockY < block.length) {
                color = block[blockY][blockX] === 0 ? color : blockColor
            }
            const k = row * grid[0].length + col;
            return <GridSquare
                key={k}
                color={color} />
        })
    })

    const update = (time) => {
        requestRef.current = requestAnimationFrame(update)
        if (!isRunning) {
            return
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time
        }
        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > speed) {
            dispatch(moveDown())
            progressTimeRef.current = 0
        }
        lastUpdateTimeRef.current = time
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [isRunning])

    return (
        <div className='grid-board'>
            {gridSquares}
        </div>
    )
}

export default GridBoard