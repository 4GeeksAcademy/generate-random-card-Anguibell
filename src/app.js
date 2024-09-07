/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pintas = ["♦", "♥", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function randomPinta() {
  let randomPinta = Math.floor(Math.random() * pintas.length);
  return pintas[randomPinta];
}

function randomValue() {
  let randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
}

window.onload = function() {
  //write your code here
  let pinta = randomPinta();
  let pintaTop = document.getElementById("pinta-top");
  pintaTop.innerHTML = pinta;
  let pintaBottom = document.getElementById("pinta-bottom");
  pintaBottom.innerHTML = pinta;
  document.getElementById("value").innerHTML = randomValue();

  if (pinta == "♦" || pinta == "♥") {
    pintaTop.style.color = "red";
    pintaBottom.style.color = "red";
  }
};
