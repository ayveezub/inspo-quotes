import { fetchRandomLocalQuote } from './fetch-quotes.js'

const observerOptions = {
  root: null,
  rootMargin: "-30%",
  threshold: 0.2,
}

const intersectionCallback = array => {
  array.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('observed')
      populateCards()
      observer.unobserve(lastCard)
      lastCard = document.querySelector('.random-quotes').lastElementChild.querySelector('.random-quotes__card')
      observer.observe(lastCard)
    }
  })
}

const populateCards = (num = 1) => {
  for (let i = 0; i < num; i++) {
    const cardContainer = document.createElement('div')
    const card = document.createElement('div')
    const quoteText = document.createElement('p')
    const quoteAuthor = document.createElement('p')

    const currentQuote = fetchRandomLocalQuote()

    cardContainer.classList.add('random-quotes__card-container')
    card.classList.add('random-quotes__card')

    quoteText.classList.add('random-quotes__quote-text')
    quoteText.textContent = `${currentQuote['quoteText']}`

    quoteAuthor.classList.add('random-quotes__quote-author')
    quoteAuthor.textContent = `- ${currentQuote['quoteAuthor']}`

    card.appendChild(quoteText)
    card.appendChild(quoteAuthor)
    cardContainer.appendChild(card)

    main.appendChild(cardContainer)
  }
}

const main = document.querySelector('.random-quotes')
let lastCard = main.lastElementChild.querySelector('.random-quotes__card')

const observer = new IntersectionObserver(intersectionCallback, observerOptions)
observer.observe(lastCard)
