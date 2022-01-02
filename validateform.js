function validateForm() {

    for (var i = 0; i < document.getElementById('application-form').elements.length; i++) {
        if (document.getElementById('application-form').elements[i].value == "") {
            alert(document.getElementById('application-form').elements[i].getAttribute("name") + " must be filled out.") 
            return false;
        }
    }

    return true;
}