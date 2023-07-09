const LINK_LIST = [
  'https://festival.imweb.me/136', //페스티벌 고어 편
  'https://festival.imweb.me/137', //페스티벌 고인물 편
  'https://festival.imweb.me/138', //제출하기
  'https://festival.imweb.me/126', //페스티벌 매니아 편
]
const BINGO_TEXT_LIST = [
  '1년에 페스티벌 최소 3개 이상 간다',
  '티켓을 집에 두고 온 적 있다',
  '그걸 현장 와서 깨달았다',
  '친구들이랑 페스티벌 팔찌 단체샷 찍어봤다',
  '초대권 당첨으로 가봤다',
  '게이트 오픈보다 일찍 가서 줄 서봤다',
  '친구들한테 같이 가자고 온갖 논리로 영업해봤다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
  '1년에 페스티벌 최소 3개 이상 간다',
]
const footer = document.getElementsByClassName('fstvl-bingo-footer')[0]
const buttons = footer.querySelectorAll('button')

const createBingoItem = (text, index) => {
  const bingoItem = document.createElement('div')
  const bingoItemText = document.createElement('p')

  bingoItem.setAttribute('class', 'fstvl-bingo-main__item')
  bingoItemText.setAttribute('class', 'fstvl-bingo-main__item-text')

  bingoItemText.innerHTML = text
  bingoItem.append(bingoItemText)

  bingoItem.addEventListener('click', () => {
    bingoItem.classList.toggle('bingo')
  })

  return bingoItem
}

const makeBingoBoard = (board) => {
  BINGO_TEXT_LIST.forEach((text, index) => {
    const bingoItem = createBingoItem(text, index)
    board.append(bingoItem)
  })
}

const addLinkToButton = (element, idx) => {
  element.addEventListener('click', () => {
    window.location.href = LINK_LIST[idx]
  })
}

const copyUrl = (element) => {
  element.addEventListener('click', (e) => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('url이 복사되었습니다!🤘🏻🎸');
    });
  })
}

window.onload = function () {
  const bingoBoard = document.getElementsByClassName('fstvl-bingo-board')[0]
  makeBingoBoard(bingoBoard)
  buttons.forEach((button, idx) => {
    if (idx === buttons.length - 1) {
      copyUrl(button)
      return
    }
    addLinkToButton(button, idx)
  })
}