const accordionHeader = document.getElementsByClassName('accordion-item__header')[0]
const accordionContents = document.getElementsByClassName('accordion-item__contents')[0]
const plusIcon = document.getElementById('plus-icon')
const minusIcon = document.getElementById('minus-icon')

accordionHeader.addEventListener('click', () => {
  accordionContents.classList.toggle('hidden')
  accordionContents.classList.toggle('show')
  plusIcon.classList.toggle('icon-hidden')
  minusIcon.classList.toggle('icon-hidden')
})