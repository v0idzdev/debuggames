function validateForm() {

    // For each form element, check if it's left blank. If it is, show a message and return false
    for (var i = 0; i < document.getElementById('application-form').elements.length; i++) {
        if (document.getElementById('application-form').elements[i].value == "") {
            alert(document.getElementById('application-form').elements[i].getAttribute("name") + " must be filled out.") 
            return false;
        }
    }

    // Else return true, and submit
    return true;
}