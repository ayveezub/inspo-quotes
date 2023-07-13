import { fetchRandomQuote } from './fetch-quotes.js'

/*
const randomColor = () => {
  const h = Math.floor(Math.random() * 360)

  return `hsl(${h}deg, 90%, 85%)`
}
*/

const populateCards = (num = 1) => {
  for (let i = 0; i < num; i++) {
    const cardContainer = document.createElement('div')
    const card = document.createElement('div')
    const quoteText = document.createElement('p')
    const quoteAuthor = document.createElement('p')
    const currentQuote = fetchRandomQuote()

    cardContainer.classList.add('inspo-quotes__card-container')
    card.classList.add('inspo-quotes__card')
    quoteText.classList.add('inspo-quotes__quote-text')
    quoteAuthor.classList.add('inspo-quotes__quote-author')

    //cardContainer.style.backgroundColor = randomColor()
    quoteText.textContent = `${currentQuote['quoteText']}`
    quoteAuthor.textContent = `- ${currentQuote['quoteAuthor']}`

    card.appendChild(quoteText)
    card.appendChild(quoteAuthor)
    card.classList.add('observed')
    cardContainer.appendChild(card)
    main.appendChild(cardContainer)
  }
}

const intersectionCallback = array => {
  array.forEach(card => {
    if (card.isIntersecting) {
      populateCards()
      observer.unobserve(lastCardContainer)
      lastCardContainer = document.querySelector('.inspo-quotes').lastElementChild
      observer.observe(lastCardContainer)
    }
  })
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}

const main = document.querySelector('.inspo-quotes')
let lastCardContainer = main.lastElementChild

const observer = new IntersectionObserver(intersectionCallback, observerOptions)
observer.observe(lastCardContainer)
