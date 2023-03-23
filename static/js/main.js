console.log("hello world")


const form = document.getElementById("search-form");
const input = document.getElementById("search-input");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting
  
  const searchQuery = input.value;

  let pageUrl = "";

  if (searchQuery === "rugs") {
    pageUrl = "http://127.0.0.1:8000/rugs/";
  } else if (searchQuery === "throw pillows") {
    pageUrl = "http://127.0.0.1:8000/throw_pillows/";
  } else {
    pageUrl = "http://127.0.0.1:8000/";
  }

  window.location.href = pageUrl; // redirect to the appropriate page
});