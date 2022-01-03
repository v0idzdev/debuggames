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

/* *** HIDES SEARCH OPTIONS WHEN SEARCH BAR ISN'T FOCUSED ON ***
function onSearchBarFocusLoss() {
    let searchOptions = document.getElementsByClassName('search-bar-option');

    // Hides search bar options
    for (var i = 0; i < searchOptions.length; i++) {
        searchOptions[i].style.display="none";
    }
} */