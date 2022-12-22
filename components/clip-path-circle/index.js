const I_WANT_ROLLING_STONES_TIME = 10

function createRollingStones() {
  const img = document.createElement('img')
  img.src = '../../assets/imgs/rolling-stones.png'
  
  const randomNumTop = Math.floor(Math.random() * 100) + 1
  const randomNumLeft = Math.floor(Math.random() * 100) + 1
  
  img.style.top = `${randomNumTop}%`
  img.style.left = `${randomNumLeft}%`
  img.classList.add('clip-path-circle__img')

  return img
}

function mounted() {
  const div = document.getElementsByClassName('wrap')

  for(let i=0; i<I_WANT_ROLLING_STONES_TIME; i++) {
    div[0].append(createRollingStones())
  }
}
