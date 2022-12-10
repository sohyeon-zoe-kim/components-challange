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
  const backButton = createElement('div')
  const homeButton = createElement('p')
  const cramps = createElement('p')
  const pageTitleButton = createElement('p')

  addClassName(backButton, 'bread-crumbs')
  addClassName(homeButton, 'bread-crumbs-home')

  homeButton.innerHTML = 'HOME'
  cramps.innerHTML = '>'
  pageTitleButton.innerHTML = document.title.toUpperCase()

  backButton.append(homeButton, cramps, pageTitleButton)
  root[0].insertAdjacentElement('afterbegin', backButton)
}

const createElement = type => {
  return document.createElement(type)
}

const addClassName = (node, className) => {
  node.setAttribute('class', className)
}