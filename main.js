"use strict";

function createHTML (){
let allText = document.getElementById("content");
let div = document.createElement("div");
div.classList.add("header");
div.innerHTML =
  `
  <h1> Welcome to Malmö University</h1>
      <h2> Do you want to search for students or courses?</h2>
      <div class= "button"><button onclick="document.location='students.html'"> Students</button> 
      <button onclick="document.location='courses.html'"> Courses</button> </div>
`



allText.appendChild(div);
}

createHTML ()
