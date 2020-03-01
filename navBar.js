//var navBar = document.createElement("nav");
var navDiv = document.createElement("div");
navDiv.className = "navDiv";
var navList = document.createElement("ul");


var titleDisplay = document.createElement("h1");
titleDisplay.textContent = "Visit Minas Tirith";
document.body.appendChild(titleDisplay);

var l1 = document.createElement("button");
l1.textContent = "Home";
l1.addEventListener("click", goHome);
function goHome(){
	window.location.href = "index.html";
}
navList.appendChild(l1);
 
var l2 = document.createElement("button");
l2.textContent = "Things To Do";
l2.addEventListener("click", thingsToDo);
function thingsToDo(){
	window.location.href = "thingsToDo.html";
}
navList.appendChild(l2);
 
var l3 = document.createElement("button");
l3.textContent = "Hotels & Lodging";
console.log(window.location.href);
if(window.location.href == "*lodging.html"){
	l3.classList.add("active");
}

l3.addEventListener("click", lodging);
function lodging(){
	window.location.href = "lodging.html";
}
navList.appendChild(l3);

var l4 = document.createElement("button");
l4.textContent = "Contact Us";
l4.addEventListener("click", contactUs);
function contactUs(){
	window.location.href = "contactUs.html";
}
navList.appendChild(l4);


navDiv.appendChild(navList);
document.body.appendChild(navDiv);
