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
    shelfItem.className = "shelf";
    var initialcount = "10";
    shelfItem.setAttribute("count", initialcount);
    var icount = document.createElement("div");
    icount.id = "icount" + value.id;
    icount.innerHTML = initialcount;
    var button = document.createElement("button");
    button.onclick = () => {
      console.log(`clicked button ${value.contents}`);

      // increment
      var count = parseInt(shelfItem.getAttribute("count")) - 1;
      shelfItem.setAttribute("count", count);
      document.getElementById("icount" + value.id).innerHTML = count;

      console.log(`count for ${value.contents} set to ${count}`);

      if (count > 0) shelfItem.className = "notfull";
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
// for (var i = 1; i < productArray.length; i++) {
//   var div = document.getElementById("Pos" + i);
//   div.innerHTML = ProductArray[i];
// }
