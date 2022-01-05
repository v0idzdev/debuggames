/* **** OLD SEARCH BAR QUERY CODE -- KEEPING IT COMMENTED OUT JUST IN CASE ****
function searchBar() {

    // Gets text box input & converts to lower case
    let input = document.getElementById('search-bar-input').value;
    input = input.toLowerCase();
    
    // Gets all of the possible search options in the HTML file & checks them against input
    let searchOptions = document.getElementsByClassName('search-bar-option');
    for (var i = 0; i < searchOptions.length; i++) {

        // If a match is found, show the link, else keep it hidden
        if (!searchOptions[i].innerHTML.toLowerCase().includes(input) || input == "") {
            searchOptions[i].style.display="none";
        } else { 
            searchOptions[i].style.display="list-item";                 
        }
    }
} */

function searchBar() {
    const updateVisibility = (option) => option.style.display = !option.innerHTML.toLowerCase().includes(input) || input == "" ? "none" : "list-item"
    const optionNotVisible = (option) => window.getComputedStyle(option).display === "none"

    let options = [].slice.call(document.getElementsByClassName('search-bar-option'));
    let input = document.getElementById('search-bar-input').value.toLowerCase();

    let noMatch = options.shift();
    noMatch.innerHTML = `No results found for "${input}."`;

    options.map(updateVisibility);
    options.every(optionNotVisible) && input != "" ? noMatch.style.display = "list-item" : noMatch.style.display = "none"
}

/* // Search bar on focus out event 
function onSearchBarFocusLoss() {
    const hideOption = (option) => option.style.display = none;
    const linkClicked = (links) => links.clicked == true ? hasClickedLink = true : hasClickedLink = false

    let options = [].slice.call(document.getElementsByClassName('search-bar-option'));

    
} */

/* let options = document.querySelectorAll('.search-bar-option');

options.forEach(option => { // Detects whether a link has been clicked, if it has, keep showing the options
    option.addEventListener('click', (event) => { [].slice.call(options).map((option) => option.style.display = "list-item"); });
}); 

// Detects whether the search bar input has been unfocused - if it has, hide the options
document.getElementById('search-bar-input').addEventListener('focusout', (event) => {
    [].slice.call(options).map((option) => option.style.display = "none");
}); */

// if anything other than the search input has been clicked on
// check if it's got the class name '.search-option-link'
// if it has, DON'T hide the links
// else, hide them 

let links = document.getElementsByClassName('search-option-link');
let options = [].slice.call(document.getElementsByClassName('search-bar-option'));

const showOptions = (option) => option.style.display = "list-item";
const hideOptions = (option) => option.style.display = "none";

document.addEventListener('click', (event) => {
    options.map(event.target.matches('.search-option-link') ? showOptions : hideOptions);
});


/* // If search bar link is clicked on, hide search bar options
function onSearchOptionClick() {
    options = [].slice.call(document.getElementsByClassName('search-bar-option'));
    options.map((option) => option.style.display = "none");
} */

/* *** HIDES SEARCH OPTIONS WHEN SEARCH BAR ISN'T FOCUSED ON ***
function onSearchBarFocusLoss() {
    let searchOptions = document.getElementsByClassName('search-bar-option');

    // Hides search bar options
    for (var i = 0; i < searchOptions.length; i++) {
        searchOptions[i].style.display="none";
    }
} */