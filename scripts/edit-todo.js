"use strict";


window.onload = function () {

  let btn = document.getElementById("btn");
  btn.onclick = btnOnClick;
  
}

function btnOnClick() {

  fetch("https://jsonplaceholder.typicode.com/todos/1") 
    .then(response => response.json())
    .then(data => {
      let IdField =
      document.getElementById("input");
     IdField.value = data.id;
    });


  let bodyData = {
    id: document.getElementById("input").value
  }
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {"Content-type":
                "application/json; charset=UTF-8"}
   })
   .then(response => response.json())
   .then(json => {
        let display = document.getElementById("display")
     display.innerHTML = "Student updated";

    });
    

}


