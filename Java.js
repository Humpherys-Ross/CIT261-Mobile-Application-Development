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

var s,
  p,
  pr,
  x = "";

let text = '{"shelf":[1,2,3]}';
let text1 = '{"pos":["1","2","3","4","5","6","7","8","9","10"]}';
let text2 =
  '{"product":[' +
  '{"prd1":["MRLB KING BOX","MRLB KING BOX","MRLB SPCBLND RED BOX","MRLB 72 NM BX FIL","MRLB GOLD KING BOX","MRLB GOLD KING BOX","MRLB SPCBLND GOLD BOX","MRLB SILVER KING BOX","MRLB SPCBLND BLACK BOX","MRLB SPCBLND BLCK MNTH BX"]},' +
  '{"prd2":["MRLB 100S BOX","MRLB 100S BOX","MRLB SPCBLND 100 RED BOX","MRLB GOLD 72 NM BX FIL","MRLB GOLD 100S BOX","MRLB GOLD 100S BOX","MRLB SPCBLND 100 GLD BX","MRLB SILVER 100S BOX","MRLB GOLD KSF MNTHL BX","MRLB SPCBLND BLK MN100 BX"]},' +
  '{"prd3":["NWPRT MENTHOL BOX","NWPRT MNTHL BOX 100S","CAMEL BOX","CAMEL 99 BOX","CAMEL BLUE BOX","CAMEL CRUSH","CAMEL CRUSH RG 85 BOX MEN","WINSTON GOLD BOX","KOOL KING BOX","AMERSPIRIT MLW YELLOW"]}]}';

let obj = JSON.parse(text);
let obj1 = JSON.parse(text1);
let obj2 = JSON.parse(text2);

var targetId = "board-container";

var boardContainer = document.getElementById("board-container");

var s1,
  s2,
  s3 = "";

var bay = s1,
  s2,
  s3;

for (s in obj.shelf) {
  x += obj.shelf[s];
  for (p in obj1.pos) {
    x += obj1.pos[p];
  }
  for (pr in obj2.product.prd1) {
    x += obj2.product.prd1[pr];
  }
}

document.getElementById("board-container").innerHTML = x;

// for (var i = 1; i < productArray.length; i++) {
//   var div = document.getElementById("Pos" + i);
//   div.innerHTML = ProductArray[i];
// }
