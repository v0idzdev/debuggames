function validateForm() {
    var formElements = document.getElementById('application-form').elements;

    // For each form element, check if it's left blank. If it is, show a message and return false
    for (var i = 0; i < document.getElementById('application-form').elements.length; i++) {
        if (formElements[i].value == "" || formElements[i].options[formElements[i].selectedIndex].value == "None") {

            // Get the 'name' attribute of the form element and print ("{name of element} must be filled out.")
            alert(formElements[i].getAttribute("name") + " must be filled out.") 
            return false;
        }
    }

    // Else return true, and submit
    alert("The form was sumbitted sucessfully.")
    return true;
}