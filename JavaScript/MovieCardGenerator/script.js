function addMovie() {
  // 1. Grab values from the 3 inputs using DOM
  // getElementById(...).value reads what the user typed/pasted in each input.
  let url = document.getElementById("movieUrl").value;
  let name = document.getElementById("movieName").value;
  let rating = document.getElementById("movieRating").value;
 
  // 2. Basic check so empty cards are not added
  if (url === "" || name === "" || rating === "") {
    alert("Please fill all 3 fields!");
	return;
  }
 
  // 3. Select the container div where cards will be shown
  let div = document.getElementById("movieContainer");
 
  // 4. Append a new movie card using innerHTML +=
  // innerHTML += keeps the old cards and adds the new one at the end (if we used =, it would erase previous cards).
  div.innerHTML += `                
	<div class="movie-card">
  	<img src="${url}" alt="${name}">
      <h3>${name}</h3>
  	<p> ${rating} / 10</p>
    </div>
  `;
//We use a template literal (backticks ` `) so we can insert variables with ${ }.

 
  // 5. Clear the inputs for the next entry
  document.getElementById("movieUrl").value = "";
  document.getElementById("movieName").value = "";
  document.getElementById("movieRating").value = "";
}
