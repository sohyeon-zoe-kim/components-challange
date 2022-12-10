window.onload = () => {
  createBreadCrumbsElement()
  addBreadCrumbsEvent()
}

const addBreadCrumbsEvent = () => {
  const homeButton = document.getElementsByClassName('bread-crumbs-home')
  homeButton[0].addEventListener('click', () => {
    location.href = "/"
  })
}

const createBreadCrumbsElement = () => {
  const root = document.getElementsByClassName('wrap')
  const backButton = document.createElement('div')
  const homeButton = document.createElement('p')
  const cramps = document.createElement('p')
  const pageTitleButton = document.createElement('p')

  backButton.setAttribute('class', 'bread-crumbs')
  homeButton.setAttribute('class', 'bread-crumbs-home')

  homeButton.innerHTML = 'HOME'
  cramps.innerHTML = '>'
  pageTitleButton.innerHTML = document.title.toUpperCase()

  backButton.append(homeButton, cramps, pageTitleButton)
  root[0].insertAdjacentElement('afterbegin', backButton)
}