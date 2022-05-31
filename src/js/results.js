// import ElectronicPigeon from "./ePigeonCourierServices.js";
import ExternalServices from "./externalServices.js";
import { loadHeaderFooter, getParam } from "./utils.js";
import SearchResults from "./SearchResultsList.js";

//put in the header & footer
loadHeaderFooter();

let searchGuide = "search "
let limiter = "";
let searchGuide1 = ""
let limiter1 = " inauthor:John Flanagan"

//get the element for the button to advance 
//the search results to the next 40 results
const advanceBttn = document.querySelector(".advancer");
//set an even listening for someone clicking it
advanceBttn.addEventListener("click", () => {
    searchBatchStart += 40;
    console.log(searchBatchStart);
    const searchResults2 = new SearchResults(searchGuide, search, 
        externalServices, listElement, searchBatchStart, limiter);
    searchResults2.init();
})
let searchBatchStart = 0;
// Get the search input and display the results
const search = getParam("searchInput");
const externalServices = new ExternalServices();
const listElement = document.querySelector(".searchResults");

const searchResults = new SearchResults(searchGuide, search, externalServices, 
    listElement, searchBatchStart, limiter);
searchResults.init();
