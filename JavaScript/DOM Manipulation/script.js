// 1. Selecting Elements

// Select the h1 element using its id
let title = document.getElementById("title");

// Select the div using its id
let box = document.getElementById("box");

// Print both elements in the console
console.log(title);
console.log(box);


// 2. DOM Manipulation

// Change the text written inside the h1
title.innerText = "DOM Manipulation Demo";


// 3. Changing Styles

// Change text color
title.style.color = "blue";

// Change background color
title.style.backgroundColor = "yellow";

// Increase font size
title.style.fontSize = "35px";

// Add some space inside the element
title.style.padding = "10px";

// Add a border
title.style.border = "2px solid black";

// Add some styles to the div
box.style.border = "2px solid red";
box.style.padding = "15px";
box.style.marginTop = "20px";
box.style.backgroundColor = "lightgray";


// 4. Creating a New Element

// Create a new paragraph element
let newPara = document.createElement("p");

// Add text inside the new paragraph
newPara.innerText = "I am a new paragraph created using JavaScript.";

// Add the paragraph inside the div
box.appendChild(newPara);

// Now the paragraph is visible on the webpage


// 5. Removing an Element

// Select the first paragraph inside the div
let firstPara = box.firstElementChild;

// Remove it from the webpage
firstPara.remove();


// 6. DOM Traversal

// parentElement -> Gives the parent of an element
console.log("Parent of Title:");
console.log(title.parentElement);

// children -> Gives all child elements
console.log("Children of Box:");
console.log(box.children);

// firstElementChild -> First child inside the div
console.log("First Child:");
console.log(box.firstElementChild);

// lastElementChild -> Last child inside the div
console.log("Last Child:");
console.log(box.lastElementChild);



