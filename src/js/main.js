import ExternalServices from "./externalServices.js";
import { loadHeaderFooter, getParam, loadTemplate } from "./utils.js";
import SearchResults from "./SearchResultsList.js";
import LibraryActions from "./libraryActions"


//put in the header & footer
loadHeaderFooter();





// // Information button functionality
// document
//     .getElementById("info_btn")
//     .setAttribute("href", "./index.html")
//     .addEventListener("click", () => {})


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