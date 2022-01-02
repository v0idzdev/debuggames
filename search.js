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
}

/* // Hides search options if search bar isn't focused 
function onSearchBarFocusLoss() {
    let searchOptions = document.getElementsByClassName('search-bar-option');

    // Hides search bar options
    for (var i = 0; i < searchOptions.length; i++) {
        searchOptions[i].style.display="none";
    }
} */