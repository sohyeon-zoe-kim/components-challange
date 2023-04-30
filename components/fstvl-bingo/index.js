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

window.onload = function () {
  const bingoBoard = document.getElementsByClassName('fstvl-bingo-board')[0]
  makeBingoBoard(bingoBoard)
}