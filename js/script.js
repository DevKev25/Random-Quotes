/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* 
 The following is an array of objects that contain motivational quotes.
 Every quote has at least its source. 
*/

const quotes = [
  {
    quote: 'If something stands between you and your success, move it. Never be denied.',
    source: 'Dwayne "The Rock" Johnson',
    citation: '',
    year: '2014'
  },
  {
    quote: 'Success is usually the culmination of controlling failure.',
    source: 'Sylvester Stallone',
    citation: '',
    year: '' 
  },
  {
    quote: 'Do not be afraid of failure. This is the way to succeed.',
    source: 'LeBron James',
    citation: 'Twitter',
    year: '2015'
  },
  {
    quote: 'Some people want it to happen, some wish it would happen, others make it happen.',
    source: 'Michael Jordan',
    citation: '',
    year: ''
  },
  {
    quote: 'I am the greatest, I said that even before I knew I was.',
    source: 'Muhammad Ali',
    citation: '',
    year: '1976'
  }
];

/*
 The following function has been set up to give a random quote from 1 to 5.
 Whenever it's called, it will go through the length of the arrays provided above.
*/

let randomQuote;

function getRandomQuote() {
  randomQuote = Math.floor(Math.random() * (quotes.length));
  let randomQuoteDisplay = quotes[randomQuote]
  return randomQuoteDisplay
};



/*
 The followinf function, it's been set up to print everything that it's shown on the website.
 Two if statements have been included to make sure it does not show any bugs whenever 
 a quote does not have either a citation or year.
*/

function printQuote() {
  let quoteRandom = getRandomQuote();

  let html =  
  `<p class="quote">  ${quoteRandom.quote} </p>
  <p class= "source"> ${quoteRandom.source}`
  if (quoteRandom.citation) {
   html += '<span class= "citation">' + quoteRandom.citation + '</span>'
  }
  
  if (quoteRandom.year) { 
   html += '<span class="year">' + quoteRandom.year + '</span>'
  }
  
  html += '</p>'
  return document.getElementById('quote-box').innerHTML = html;
  
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);