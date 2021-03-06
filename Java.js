/*
var productArray = [
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
*/

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displaycontents(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", "bay.JSON", true);
  xhttp.send();
}

function displaycontents(stuff) {
  var productArray = stuff.position;

  var targetId = "board-container";

  var boardContainer = document.getElementById("board-container");

  productArray.forEach((value, i, a) => {
    var shelfItem = document.createElement("div");
    var initialcount = "10";
    var icount = document.createElement("div");
    var button = document.createElement("button");

    shelfItem.className = "shelf";
    shelfItem.setAttribute("count", initialcount);
    icount.id = "icount" + value.id;
    icount.innerHTML = initialcount;

    button.onclick = () => {
      console.log(`clicked button ${value.contents}`);

      // increment
      var count = parseInt(shelfItem.getAttribute("count")) - 1;
      shelfItem.setAttribute("count", count);
      document.getElementById("icount" + value.id).innerHTML = count;

      console.log(`count for ${value.contents} set to ${count}`);

      if (count < parseInt(initialcount)) {
        shelfItem.className = "icount";
        // icount.style.backgroundColor = "blue";
        // icount.style.transform = "1";
      }
    };
    button.className = "fas fa-minus";

    var shelfContent = document.createElement("div");
    shelfContent.innerHTML = value.contents;

    shelfItem.appendChild(button);
    shelfItem.appendChild(shelfContent);
    shelfItem.appendChild(icount);
    boardContainer.appendChild(shelfItem);
  });
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(
  "This application allows you to add/remove shalves and positions, product name, and allocation. When you click the Minus button, it shows you the number of each product needed to fill the position up.",
  10,
  50
);
// for (var i = 1; i < productArray.length; i++) {
//   var div = document.getElementById("Pos" + i);
//   div.innerHTML = ProductArray[i];
// }
