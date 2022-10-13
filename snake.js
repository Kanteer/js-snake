export const SNAKE_SPEED = 4
const snakeBody = [{ x:11, y: 11 }]

export function update() {
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.syle.gridRowStart = segment.x
    SnakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}
