// Where we store objects -> array full of objects that are recieved
let apiQuotes = [];

// Show New Quote

function getRandomInt(max) {
  console.log(Math.floor(Math.random() * Math.floor(max)));
}

function newQuote() {}

async function getQuotes() {
  //fetching a source and storing it
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); //once {won't exist unless something is recieved} source is received, that is label as our response.
    apiQuotes = await response.json(); //destructs the JSON to Objects; extracted
    newQuote();
    // console.log(apiQuotes[12]); //reads objects

    //breaking that json into objects;
  } catch (error) {
    alert(error);
    //handle error
  }
}

// On load

getQuotes(); //perform
