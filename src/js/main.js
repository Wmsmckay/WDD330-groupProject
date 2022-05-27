import ExternalServices from "./externalServices.js";
import { loadHeaderFooter, getParam, loadTemplate } from "./utils.js";
import SearchResults from "./SearchResultsList.js";
import LibraryActions from "./libraryActions"


//put in the header & footer
loadHeaderFooter();


// Searchbar functionality
// Get the search input and display the results
const search = getParam("searchInput");
if (search != null){
    const externalServices = new ExternalServices();
    const listElement = document.querySelector(".page-content");
    const searchResults = new SearchResults(search, externalServices, listElement);
    searchResults.init();
}


// Information button functionality

// Shelves buttons

// ReadingNow button functionality
//create a variable for the "Read Before" shelf button element
let readButton = document.querySelector("#read_bttn");
readButton.addEventListener("click", () => {
    let shelf = new LibraryActions("read-shelf");
    shelf.getShelvedBooks();
})

// WantToRead button functionality
let readingButton = document.querySelector("#reading_bttn");
readingButton.addEventListener("click", () => {
    let shelf = new LibraryActions("reading-shelf");
    shelf.getShelvedBooks();
})

// ReadBefore button functionality
let wantButton = document.querySelector("#want_bttn");
wantButton.addEventListener("click", () => {
    let shelf = new LibraryActions("want-read-shelf");
    shelf.getShelvedBooks();
})