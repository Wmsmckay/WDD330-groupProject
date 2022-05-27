import { loadHeaderFooter } from "./utils.js";
import LibraryActions from "./libraryActions.js";

//put in the header & footer
loadHeaderFooter();



//create a variable for the "Read Before" shelf button element
let readButton = document.querySelector("#read_bttn");
//add an event listener to that button that calls the "getShelvedBooks" method
readButton.addEventListener("click", () => {
    //create a LibraryActions class object with "read-shelf" argument
    //to make it possible to access its "getShelvedBooks" method
    let shelf = new LibraryActions("read-shelf");
    //this will add the list of books they've read to the page
    shelf.getShelvedBooks();
})

//create a variable for the "Reading Now" shelf button element
let readingButton = document.querySelector("#reading_bttn");
//add an event listener to that button that calls the "getShelvedBooks" method
readingButton.addEventListener("click", () => {
    //create a LibraryActions class object with "reading-shelf" argument
    //to make it possible to access its "getShelvedBooks" method
    let shelf = new LibraryActions("reading-shelf");
    //this will add the list of books their reading to the page
    shelf.getShelvedBooks();
})

//create a variable for the "Want to Read" shelf button element
let wantButton = document.querySelector("#want_bttn");
//add an event listener to that button that calls the "getShelvedBooks" method
wantButton.addEventListener("click", () => {
    //create a LibraryActions class object with "want-read-shelf" argument
    //to make it possible to access its "getShelvedBooks" method
    let shelf = new LibraryActions("want-read-shelf");
    //this will add the list of books their reading to the page
    shelf.getShelvedBooks();
})

// Add active class to the current button (highlight it)
var header = document.getElementById("MyLIB");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}