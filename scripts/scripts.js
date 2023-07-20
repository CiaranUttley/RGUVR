//java script that displays a message when the submit button is pressed and the

document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent form submission to observe the effect
  event.preventDefault();

  // Show a confirmation dialog before submitting the form
  if (confirm("Are you sure you want to submit the form?")) {
    // Submit the form if user clicks "OK"
    this.submit();
    document.getElementById("feedback").textContent = "Form submission succesful";
    document.getElementById("myForm").innerHTML="Form has been sent successfully! Please refresh the page."
  } else {
    // If user clicks "Cancel," do nothing
    document.getElementById("feedback").textContent = "Form submission canceled.";
  }
});

 