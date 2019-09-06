// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var inpt = d3.select("#text");
var opt = d3.select(".output");
// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  var v = event.value;

  // clear the existing output
  // @TODO: YOUR CODE HERE
  var outpt = d3.select(".output").text("");
  outpt.text(""); 

  // reverse the input string
  // @TODO: YOUR CODE HERE
  var vrev = reverseString(v);

  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  outpt.text(vrev);
}

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE
inpt.on("change",handleChange);
