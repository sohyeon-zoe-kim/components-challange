const accordionHeader = document.getElementsByClassName('accordion-item__header')[0]
const accordionContents = document.getElementsByClassName('accordion-item__contents')[0]

accordionHeader.addEventListener('click', () => {
  accordionContents.classList.toggle('hidden')
  accordionContents.classList.toggle('show')
})