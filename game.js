let lastRenderTime = 0
const SNAKE_SPEED = 4

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
}

function draw() {
}
