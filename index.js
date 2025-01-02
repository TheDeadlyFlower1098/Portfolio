function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("toggleMode");
    
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle("dark-mode");
  
    // Check if the body has the 'dark-mode' class
    if (body.classList.contains("dark-mode")) {
      button.innerHTML = "Toggle Light Mode";
      button.onclick = function() {
        location.reload(); // Refresh the page when clicked to revert to light mode
      };
    } else {
      button.innerHTML = "Toggle Dark Mode";
      button.onclick = function() {
        toggleDarkMode(); // Restore dark mode toggle functionality
      };
    }
  }
  