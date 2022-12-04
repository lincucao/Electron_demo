var fs = require("fs");
window.onload = function () {
  var btn = this.document.querySelector("#btn");
  var domContainer = this.document.querySelector("#container");
  btn.onclick = function () {
    fs.readFile("text.txt", (err, data) => {
      domContainer.innerHTML = data;
    });
  };
};
