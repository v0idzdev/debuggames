function searchBar() {

    // Gets the user's input from the input text box on the page
    let input = document.getElementById('search-bar-input').value;
    input = input.toLowerCase();
    
    // Gets all of the possible search options in the HTML file
    let searchOptions = document.getElementsByClassName('search-bar-option');

    // Checks if options include the input
    for (var i = 0; i < searchOptions.length; i++) {

        // If they don't, hide them so they're not displayed
        if (!searchOptions[i].innerHTML.toLowerCase().includes(input) || input == "") {
            searchOptions[i].style.display="none";
        }

        else { // If they do, display it in the list  
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