// Function to show the loader
function showLoader() {
    document.getElementById("loader").style.display = "block";
  }
  
// Function to hide the loader
function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }
  
// Call showLoader() to display the loader
showLoader();
  
// Call hideLoader() to hide the loader (when your content is ready)
hideLoader();


function simulateLoader() {
    showLoader();
    setTimeout(hideLoader, 1000); // Hide the loader after 3 seconds (adjust as needed)
  }
  
  // Call the function to simulate the loader
simulateLoader();