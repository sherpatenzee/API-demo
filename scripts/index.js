"use strict";


window.onload = function () {

  let btn = document.getElementById("btn");
  btn.onclick = btnOnClick;

}

function btnOnClick() {

  let input = document.getElementById("input").value
  let message = document.getElementById("message")
  fetch("http://jsonplaceholder.typicode.com/todos/" + input)
    .then(response => response.json())
    .then(data => {
      message.innerHTML = data.title;
      
    });
}
