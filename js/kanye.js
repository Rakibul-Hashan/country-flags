const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))

}
const loadSingleQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => singleQuote(data))

}
const displayQuotes = (quotes) => {
    const quoteContainer = document.getElementById('quotes');
    const div = document.createElement('div');
    div.innerHTML = quotes.quote;
    quoteContainer.appendChild(div);
}

const singleQuote = (quote) => {
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = quote.quote;
}