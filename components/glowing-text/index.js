const ANIMATION_LOOP_TIME_INTERVAL = 100
const textList = document.getElementsByClassName('glowing-text__letter')
let nowTextIndex = 0
let timer = null
const text = 'sorogi'

function addAnimation(element) {
  element.classList.add('glowing-text__letter--blinking');
}

function removeAllAnimation() {
  Array.from(textList).forEach(el => {
    el.classList.remove('glowing-text__letter--blinking');
  })
}

function loopAnimation() {
  nowTextIndex++
  if (nowTextIndex > 5) {
    nowTextIndex = 0
    removeAllAnimation()
    addAnimation(Array.from(textList)[nowTextIndex])
  }else {
    removeAllAnimation()
    addAnimation(Array.from(textList)[nowTextIndex])
  }
}

function startLoop() {
  timer = setInterval(loopAnimation, ANIMATION_LOOP_TIME_INTERVAL)
}

startLoop()
