const eyes = document.querySelectorAll(".animated-eyes__eye")
const eyeballs = document.querySelectorAll(".animated-eyes__inner-eyeball")
const leftEyeBall = eyeballs[0]
const rightEyeBall = eyeballs[1]
const leftEye = eyes[0]
const rightEye = eyes[1]
const leftEyeBallCordinate = leftEyeBall.getBoundingClientRect()
const rightEyeBallCordinate = rightEyeBall.getBoundingClientRect()
let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.08
let leftEyeDegree = 0
let rightEyeDegree = 0

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
  
  /* 기준점
  [inner_eyeball]
  top : getBoundingClientRect.top + 헤더 height + eyeball / 2
  left : getBoundingClientRect.left (leftEye의 경우 90을 더함 - 미간 위치 맞추기 위해)
  */
  leftEyeDegree = Math.atan2(Math.floor(mouseY) - (leftEyeBallCordinate.top + 90.5), Math.floor(mouseX) - (leftEyeBallCordinate.left + 90)) * 180 / 3.1415
  rightEyeDegree = Math.atan2(Math.floor(mouseY) - (rightEyeBallCordinate.top + 90.5), Math.floor(mouseX) - rightEyeBallCordinate.left) * 180 / 3.1415

  leftEye.style.transform = `rotate(${leftEyeDegree + 180}deg)`
  rightEye.style.transform = `rotate(${rightEyeDegree + 180}deg)`

  window.requestAnimationFrame(loop)
}

init()