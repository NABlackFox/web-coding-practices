// ======= Example 1 <h1> ========

// Step 1 create the element
const newH1 = document.createElement("h1");
const newH2 = document.createElement("h1");

// Step 2 add attributes/properties
newH1.textContent = "I like pizza last";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
newH2.textContent = "I like pizza first";


// Step 3 append element to DOM
// document.body.append(newH1); // add the last child, prepend for first child

// document.getElementById("box1").append(newH2);

// document.body.insertBefore(newElement, currentElement);

const boxes = document.querySelectorAll(".box");
// REMOVE HTML ELEMENT

document.body.removeChild(newH2);