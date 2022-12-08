const eyes = document.querySelectorAll(".animated-eyes__eye")
const leftEye = eyes[0]
const rightEye = eyes[1]
let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.08

function init() {
  window.addEventListener('mousemove', calculateMouseCordinate)
  loop()
}

function calculateMouseCordinate(e) {
  x = e.clientX
  y = e.clientY
}

function loop() {
  mouseX += (x - mouseX) * speed
  mouseY += (y - mouseY) * speed

  window.requestAnimationFrame(loop)
}

init()