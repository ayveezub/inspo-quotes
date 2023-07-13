import { quotesData } from './quotes.js'

const fetchRandomElem = array => array[Math.floor(Math.random()*array.length)]

function fetchRandomQuote() {
  return fetchRandomElem(quotesData)
}

async function fetchRandomQuoteFromAPI() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random")

  if (!response.ok) {
    throw new Error("Network response was not OK")
  }

  const data = await response.json()
  
  return data
}

export { fetchRandomQuote }
