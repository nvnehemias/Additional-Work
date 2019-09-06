// Select the text of an HTML element
var text1 = d3.select(".text1").text();

// Modify the text of an HTML element
d3.select(".text1").text("This is the new message");

// Capture the HTML of a selection
var capture = d3.select(".my-link").html();

// Select an element's child element
// An object is returned
var child = d3.select(".my-link>a");

// // Capture the child element's href attribute
var child2 = d3.select(".my-link>a").attr("href");

// Change an element's attribute
var child3 = d3.select(".my-link>a").attr("href","https://python.org");

// Select all list items, then change their font color
d3.selectAll("li").style("color","red")

// Create a new element
var new_list = d3.select("ul").append("li").text("This is a new list");


