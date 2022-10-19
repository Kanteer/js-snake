import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSincelastRender < 1 / SNAKE_SPEED) return
  
  
  window.requestAnimationFrame(main)
  lastRenderTime = currentTime
  
  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
}

function draw() {
  drawSnake(gameBoard)
}
