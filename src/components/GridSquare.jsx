import React from 'react'

//generate komponen kotak dengan warna dari prop
const GridSquare = (props) => {
    const classes = `grid-square color-${props.color}`
    return (
        <div className={classes}>

        </div>
    )
}

export default GridSquare