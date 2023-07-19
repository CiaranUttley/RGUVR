
function submit_event() {
    var email = document.forms["myForm"]["Email"].value;
    var date = document.forms["event"]["event_date"].value;
    if (email == "") {
    alert("An event must have a title!");
    }
    else {
    if (date.length == 0) {
    alert("An event must have a date!");
    }
    else {
    alert("Event submitted! The society will contact you soon!");
    }
    }
    }