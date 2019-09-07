// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
function filtercities(city) {
    return parseInt(city.Increase_from_2016) > 15000;
}

// 2. Use filter() to pass the function as its argument

var new_cities = top15Cities.filter(filtercities);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(new_cities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.

var city_names = new_cities.map(city => city.City);

//  Check your filtered cities
console.log(city_names);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.

var city_pop = new_cities.map(city => city.population);

//  Check the populations of your filtered cities
console.log(city_pop);

// 5. Create your trace.

var trace = {
    x: city_names,
    y: city_pop,
    type: "bar"
};

// 6. Create the data array for our plot

var data = [trace];

// 7. Define our plot layout

var layout = {
    title:"Cities",
    xaxis: {title:"City Names"},
    yaxis: {title:"Population"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot",data,layout);