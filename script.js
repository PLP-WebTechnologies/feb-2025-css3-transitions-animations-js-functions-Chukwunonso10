// Save name to localStorage and update display
document.getElementById("saveBtn").addEventListener("click", function () {
    const name = document.getElementById("usernameInput").value;
    if (name.trim() !== "") {
      localStorage.setItem("username", name);
      updateUsernameDisplay(name);
    }
  });
  
  // Load name from localStorage on page load
  window.onload = function () {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      updateUsernameDisplay(storedName);
    }
  };
  
  // Update greeting with stored name
  function updateUsernameDisplay(name) {
    document.getElementById("usernameDisplay").textContent = name;
  }
  
  // Animate box on button click
  document.getElementById("animateBtn").addEventListener("click", function () {
    const box = document.getElementById("animateBox");
  
    // Restart animation
    box.classList.remove("animated");
    void box.offsetWidth; // Trigger reflow
    box.classList.add("animated");
  });
  