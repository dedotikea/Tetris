export const PAUSEGAME = "PAUSEGAME"       // Pause
export const RESUME = "RESUME"      // Resume
export const MOVE_LEFT = "MOVE_LEFT"   // Gerak tetromino ke kiri
export const MOVE_RIGHT = "MOVE_RIGHT"  // Gerak tetromino ke kanan
export const ROTATE = "ROTATE"      // Putar tetromino searah jarum jam
export const MOVE_DOWN = "MOVE_DOWN"   // Gerak tetromino ke bawah 1 blok
export const GAME_OVER = "GAME_OVER"   // Game over
export const RESTART = "RESTART"     // Restart Game

export const moveRight = () => {
    return { type: MOVE_RIGHT }
}

export const moveLeft = () => {
    return { type: MOVE_LEFT }
}

export const rotate = () => {
    return { type: ROTATE }
}

export const moveDown = () => {
    return { type: MOVE_DOWN }
}

export const pauseGame = () => {
    return { type: PAUSEGAME }
}

export const resume = () => {
    return { type: RESUME }
}

export const restart = () => {
    return { type: RESTART }
}