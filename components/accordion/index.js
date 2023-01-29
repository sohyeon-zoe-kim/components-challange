const accordion = document.getElementsByClassName('accordion')[0]
const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates quae nostrum totam quaerat, commodi asperiores ullam. Neque enim beatae, cum, optio, tempora autem est a sint vitae ipsum debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates quae nostrum totam quaerat, commodi asperiores ullam. Neque enim beatae, cum, optio, tempora autem est a sint vitae ipsum debitis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates quae nostrum totam quaerat, commodi asperiores ullam. Neque enim beatae, cum, optio, tempora autem est a sint vitae ipsum debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates quae nostrum totam quaerat, commodi asperiores ullam. Neque enim beatae, cum, optio, tempora autem est a sint vitae ipsum debitis!'

const addAccordion = (index) => {
  const accordionItem = createElement('div')
  addClassName(accordionItem, 'accordion-item')

  //accordion header 생성
  const header = createElement('div')
  const headerTitle = createElement('p')
  const { plusIcon, minusIcon } = addToggleButton()
  addClassName(header, 'accordion-item__header')
  addClassName(headerTitle, 'accordion-item__header-title')
  headerTitle.innerHTML = `Sorogi Accordion ${index}`
  header.append(headerTitle, plusIcon, minusIcon)

  //accordion contents 생성
  const contents = createElement('div')
  const contentsText = createElement('p')
  addClassName(contents, 'accordion-item__contents hidden')
  addClassName(contentsText, 'accordion-item__contents-text')
  contentsText.innerHTML = text
  contents.append(contentsText)

  header.addEventListener('click', () => {
    contents.classList.toggle('hidden')
    contents.classList.toggle('show')
    plusIcon.classList.toggle('icon-hidden')
    minusIcon.classList.toggle('icon-hidden')
  })

  accordionItem.append(header, contents)
  
  return accordionItem
}

const addToggleButton = () => {
  const plusIcon = createElement('img')
  plusIcon.setAttribute('src', '/assets/imgs/plus_icon.svg')
  addClassName(plusIcon, 'accordion-item__header-toggle-button plus-icon')

  const minusIcon = createElement('img')
  minusIcon.setAttribute('src', '/assets/imgs/minus_icon.svg')
  addClassName(minusIcon, 'accordion-item__header-toggle-button minus-icon icon-hidden')

  return { plusIcon, minusIcon }
}

const init = () => {
  accordion.append(addAccordion(1))
  accordion.append(addAccordion(2))
  accordion.append(addAccordion(3))
}

init()