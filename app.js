quoteText = document.getElementById('quote-text')
newQuote = document.getElementById('new-one')
author = document.getElementById('author')
bgColor = document.querySelectorAll('.bg')
console.log(bgColor);
async function getQuotes() {
 
    const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    if(data) {
       quoteText.innerText = data.quoteText
         author.innerText = data.quoteAuthor
    }
}
getQuotes()

newQuote.addEventListener('click', getQuotes)

const random = () => {
  return Math.round(Math.random() * 255);
};

newQuote.addEventListener('click', ()=> {
    const random1 =  random()
    const random2 = random()
    const random3 = random()

    bgColor.forEach(item => {
        item.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
    })
})
