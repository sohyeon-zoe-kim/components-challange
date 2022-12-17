const ANIMATION_LOOP_TIME_INTERVAL = 300
let nowTextIndex = 0
let timer = null
let textList = null
const text = document.getElementsByClassName('glowing-text-input__box').value || 'SOROGI'

const setGlowingText = () => {
  const textList = document.getElementsByClassName('glowing-text-list')[0]
  text.split('').forEach((letter) => {
    const element = createElement('span')
    element.innerHTML = letter
    addClassName(element, 'glowing-text-list__letter')
    textList.appendChild(element)
  })
}

function addAnimation(element) {
  element.classList.add('glowing-text-list__letter--blinking');
}

function removeAllAnimation() {
  Array.from(textList).forEach(el => {
    el.classList.remove('glowing-text-list__letter--blinking');
  })
}

function loopAnimation() {
  nowTextIndex++
  if (nowTextIndex >= text.length) {
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

setGlowingText()
textList = document.getElementsByClassName('glowing-text-list__letter')
startLoop()
