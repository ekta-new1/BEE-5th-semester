function addUser() {
  // 1. Get values from the 3 inputs
  let name = document.getElementById("userName").value;
  let age = document.getElementById("userAge").value;
  let email = document.getElementById("userEmail").value;
 
  // 2. Validate
  if (name === "" || age === "" || email === "") {
    alert("Please fill all 3 fields!");
	return;
  }
 
  // 3. Select the table body
  let tableBody = document.getElementById("userTableBody");
 
  // 4. Append a new row using innerHTML +=
  tableBody.innerHTML += `
	<tr>
      <td>${name}</td>
      <td>${age}</td>
      <td>${email}</td>
	</tr>
  `;
 
  // 5. Clear inputs
  document.getElementById("userName").value = "";
  document.getElementById("userAge").value = "";
  document.getElementById("userEmail").value = "";
}
