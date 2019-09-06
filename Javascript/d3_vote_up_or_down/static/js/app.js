// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote")
var downvote = d3.select(".downvote")

// Select the counter h1 element
counter_h1 = d3.select(".counter")

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click",function(){
  var value = parseInt(counter_h1.text())

  var value += 1

  counter_h1.text(value)
})

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click",function(){
  var value = parseInt(counter_h1.text())
  
  var value -= 1

  counter_h1.text(value)
})