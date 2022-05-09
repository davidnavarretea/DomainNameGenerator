/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pro = ["the", "our", "my"];
  const adj = ["great", "mega", "super"];
  const nom = ["hero", "champion", "warrior"];
  const result = [];
  pro.map(e => {
    adj.map(i => {
      nom.map(o => {
        result.push(e + i + o + ".com");
      });
    });
  });
  result.map(a => {
    console.log(a);
  });
};
