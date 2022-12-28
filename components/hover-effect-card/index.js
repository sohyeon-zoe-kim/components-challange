const cardList = document.getElementsByClassName('hover-effect-card')
const cardItems = document.getElementsByClassName('hover-effect-card__item')
const CONTENTS = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio nisi reprehenderit error culpa amet incidunt architecto numquam ad at dolorem odit maxime vel dolor mollitia sapiente, aperiam, quo quae?'

{/* <div class="hover-effect-card__item">
      <div class="hover-effect-card__item-wrapper">
        <h1 class="hover-effect-card__item-title">Sorogi One</h1>
        <p class="hover-effect-card__item-contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio nisi reprehenderit error culpa amet incidunt architecto numquam ad at dolorem odit maxime vel dolor mollitia sapiente, aperiam, quo quae?</p>
        <button class="hover-effect-card__item-button">Read more</button>
      </div>
    </div> */}


const addCard = (title, contents) => {
  const newCard = createElement('div')
  const cardWrapper = createElement('div')
  const cardTitle = createElement('h1')
  const cardContents = createElement('p')
  const cardButton = createElement('button')

  addClassName(newCard, 'hover-effect-card__item hover-effect-card__item_pink')
  addClassName(cardWrapper, 'hover-effect-card__item-wrapper')
  addClassName(cardTitle, 'hover-effect-card__item-title')
  addClassName(cardContents, 'hover-effect-card__item-contents')
  addClassName(cardButton, 'hover-effect-card__item-button')

  cardTitle.innerHTML = title
  cardContents.innerHTML = contents
  cardButton.innerHTML = 'Read more'

  cardWrapper.append(cardTitle, cardContents, cardButton)
  newCard.append(cardWrapper)
  
  cardList[0].append(newCard)
}

addCard('Sorogi One', CONTENTS)
addCard('Sorogi Two', CONTENTS)
addCard('Sorogi Three', CONTENTS)