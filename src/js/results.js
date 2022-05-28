// import ElectronicPigeon from "./ePigeonCourierServices.js";
import ExternalServices from "./externalServices.js";
import { loadHeaderFooter, getParam } from "./utils.js";
import SearchResults from "./SearchResultsList.js";

//put in the header & footer
loadHeaderFooter();

// Searchbar functionality
// Get the search input and display the results
const search = getParam("searchInput");
if (search != null){
    const externalServices = new ExternalServices();
    const listElement = document.querySelector(".searchResults");
    const searchResults = new SearchResults(search, externalServices, listElement);
    searchResults.init();
}