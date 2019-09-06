// Use D3 to select the table body
var table_body = d3.select("tbody");
// Use D3 to select the table
var table = d3.select("table");
// Use D3 to set the table class to `table table-striped`
table_body.attr("class","table table-striped")
// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Malcolm", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

grades.forEach(([name,grade]) => {
    var row = table_body.append("tr");
    row.append("td").text(name);
    row.append("td").text(grade)
});