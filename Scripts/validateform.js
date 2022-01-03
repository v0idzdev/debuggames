/* **** OLD FORM VALIDATION CODE ****

function validateForm() {
    // For each form element, check if it's left blank. If it is, show a message and return false
    for (var i = 1; i < document.getElementById('application-form').elements.length; i++) {
        if (document.getElementById('application-form').elements[i].value == "") {

            // Get the 'name' attribute of the form element and print ("{name of element} must be filled out.")
            alert(document.getElementById('application-form').elements[i].getAttribute("name") + " must be filled out.") 
            return false;
        }
    }

    // Else return true, and submit
    alert("The form was sumbitted sucessfully.")
    return true;
}*/

function validateForm() {
    let fields = [].slice.call(document.getElementById('application-form').elements);
    let select = fields.shift();
    
    if (select.options[select.selectedIndex].value == "None") {
        alert("Job role must be filled out.");
        return false;
    }

    let isValid = fields.map((field) => field.value == "" ? false : true)

    if (isValid.includes(false)) {
        alert(`${fields[isValid.indexOf(false)].getAttribute("name")} must be filled out.`);
        return false;
    }

    alert("The form was sumbitted sucessfully.")
    return true;
}