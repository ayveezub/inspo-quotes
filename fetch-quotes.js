import { localQuotes } from './local-quotes.js'

const fetchRandomElem = array => array[Math.floor(Math.random()*array.length)]

const fetchRandomLocalQuote = () => fetchRandomElem(localQuotes)

export { fetchRandomLocalQuote }
