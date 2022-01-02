/* **** OLD SEARCH BAR QUERY CODE ****
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
    // Creates an array out of all the search options, then gets the input and converts to lowercase
    let options = [].slice.call(document.getElementsByClassName('search-bar-option'));
    let input = document.getElementById('search-bar-input').value.toLowerCase();

    // Maps a function that shows/hides the option (depending on whether it contains the input) to each element in the options array
    options.map((option) => option.style.display = !option.innerHTML.toLowerCase().includes(input) || input == "" ? "none" : "list-item");
}

/* *** HIDES SEARCH OPTIONS WHEN SEARCH BAR ISN'T FOCUSED ON ***
function onSearchBarFocusLoss() {
    let searchOptions = document.getElementsByClassName('search-bar-option');

    // Hides search bar options
    for (var i = 0; i < searchOptions.length; i++) {
        searchOptions[i].style.display="none";
    }
} */