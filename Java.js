$(document).ready(function() {
  var ProductArray = [
    "Eggs",
    "Cheese",
    "Milk",
    "Bread",
    "Cereal",
    "Chocolate",
    "Ham",
    "ChexMix",
    "Oranges",
    "Tomatoes"
  ];
  for (var i = 0; i < ProductArray.length; i++) {
    var div = document.getElementById("Pos" + (i + 1));
    div.innerHTML = ProductArray[i];
  }
  $("div").click(function(event) {
    $(event.target).toggleClass("minus");
  });
});
