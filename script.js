// Where we store objects -> array full of objects that are recieved
let apiQuotes = [];

async function getQuotes() {
  //fetching a source and storing it
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl); //once {won't exist unless something is recieved} source is received, that is label as our response.
    apiQuotes = await response.json();
    console.log(apiQuotes[1]);
    //breaking that json into objects;
  } catch (error) {
    alert(error);
    //handle error
  }
}

// On load

getQuotes();
