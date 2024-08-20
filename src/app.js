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

  theme.forEach(themeElement => {
    action.forEach(actionElement => {
      host.forEach(hostElement => {
        result.push(`${themeElement}${actionElement}${hostElement}`);
      });
    });
  });
  const random = array => array[Math.floor(Math.random() * array.length)];

  document.getElementById("click").onclick = function() {
    document.getElementById("domain").innerHTML = random(result);
  };
};
