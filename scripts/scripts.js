document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    
    // Display feedback message
    document.getElementById("feedback").textContent = "Form submitted successfully! Please refresh the page.";
  });


  