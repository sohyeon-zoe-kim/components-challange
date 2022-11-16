window.onload = () => {
  addBreadCrumbsEvent()
}

const addBreadCrumbsEvent = () => {
  const breadCrumbs = document.getElementsByClassName('back-button-home')
  breadCrumbs[0].addEventListener('click', () => {
    location.href = "/"
  })
}