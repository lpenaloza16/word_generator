// Where we store objects -> array full of objects that are recieved
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show New Quote

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide Loading

function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function getRandomInt(max) {
  console.log(Math.floor(Math.random() * Math.floor(max)));
}

//Pick a random quote from apiQuotes array
function newQuote() {
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.text) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //checking quote length for styling

  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  //Set Quote, Hide Loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

async function getQuotes() {
  showLoadingSpinner();
  //fetching a source and storing it
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json"; //best to use api since it can be updated over time, compared to something that just sits on your local file
  try {
    const response = await fetch(apiUrl); //once {won't exist unless something is recieved} source is received, that is label as our response.
    apiQuotes = await response.json(); //destructs the JSON to Objects; extracted
    newQuote();
    //console.log(apiQuotes[12]); //reads objects

    //breaking that json into objects;
  } catch (error) {
    alert(error);
    //handle error
  }
}

function tweetQuote() {
  const twittrUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twittrUrl, "_blank");
}

// On load

//Event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotes(); //perform
// loading();
