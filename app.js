function hideshow(){
  var x = document.getElementById('branch');
  if(x.style.display==="none"){
      x.style.display='block'; 
  }
  else{
      x.style.display="none";
  }
}
function validateForm(){
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var messageInput = document.getElementById("messageInput");
  if(nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === ""){
  alert("Please fill the required fields");
  return false;
  }
  return true;
}
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector(".search");
  const bookTitles = document.querySelectorAll("h2[id^='book']");

  searchInput.addEventListener("input", function() {
    const searchTerm = this.value.trim().toLowerCase();

    bookTitles.forEach(title => {
      const bookTitle = title.textContent.trim().toLowerCase();
      if (searchTerm && bookTitle.includes(searchTerm)) {
        title.style.backgroundColor = "lightgreen";
      } else {
        title.style.backgroundColor = "initial";
      }
    });
  });
});

function toggleBookDetails(containerId) {
var detailsContainer = document.getElementById(containerId);

if (detailsContainer.style.display === "none" || detailsContainer.style.display === "") {
    detailsContainer.style.display = "block";
} else {
    detailsContainer.style.display = "none";
}
}
