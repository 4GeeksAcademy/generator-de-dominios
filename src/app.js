/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const theme = ["Block", "Blockchain", "Cripto"];
  const action = ["Finance", "Exchange", "Tokens"];
  const host = [".com", ".es", ".io"];

  let result = [];

  theme.forEach(elemento1 => {
    action.forEach(elemento2 => {
      host.forEach(elemento3 => {
        result.push(`${elemento1}${elemento2}${elemento3}`);
      });
    });
  });
  const random = array => array[Math.floor(Math.random() * array.length)];

  document.getElementById("click").onclick = function() {
    document.getElementById("domain").innerHTML = random(result);
  };
};
