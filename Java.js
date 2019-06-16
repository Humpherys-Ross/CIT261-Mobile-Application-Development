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


var targetId = "board-container";

/* <div>
<button onclick="RmvPrd()" class="fas fa-minus"></button>
<div id="Pos1"></div>
</div> */

var boardContainer = document.getElementById("board-container");

productArray.forEach( (value, i, a) => {
  var shelfItem = document.createElement("div");
  shelfItem.className = "fas fa-red"
  shelfItem.setAttribute("count", "0")
  
  var button = document.createElement("button");
  button.onclick = () => { 
    console.log(`clicked button ${value}`)
    
    // increment
     var count = parseInt(shelfItem.getAttribute("count")) + 1;
     shelfItem.setAttribute("count", count);

     console.log(`count for ${value} set to ${count}`);

    if(count > 0) shelfItem.className = "fas fa-green";
  };
  button.className = "fas fa-minus"

  var shelfContent = document.createElement("div");
  shelfContent.innerHTML = value

  shelfItem.appendChild(button);
  shelfItem.appendChild(shelfContent);

  boardContainer.appendChild(shelfItem);
});


// for (var i = 1; i < productArray.length; i++) {
//   var div = document.getElementById("Pos" + i);
//   div.innerHTML = ProductArray[i];
// }
