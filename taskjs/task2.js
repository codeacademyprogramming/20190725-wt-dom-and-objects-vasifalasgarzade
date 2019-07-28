"use strict"

let belement = document.body;

let divesas = document.createElement("div");
divesas.classList.add("esas-div");

let pelement = document.createElement("p");
pelement.className = "write"
pelement.innerText = "WHAT PEOPLE SAY";
belement.appendChild(pelement)
let helement = document.createElement("h1");
helement.className = "write-2";
helement.innerText = "Reviews";
belement.appendChild(helement);







let divimg1 = document.createElement("div")
divimg1.classList.add("contact-us-1")
let newp1 = document.createElement("p");
newp1.innerText = "amet consectetur adipisicing elit. Corporis officia impedit enim iure ea nobis quasi officiis illum, debitis nihil non numquam quae in fugit adipisci? Ex architecto voluptas libero!";
let image1 = document.createElement("img");
image1.setAttribute("src", "https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");
let name1 = document.createElement("h5");
name1.innerText = "John Doe";


divimg1.appendChild(newp1);

divimg1.appendChild(image1)
divimg1.appendChild(name1);





let divimg2 = document.createElement("div")
divimg2.classList.add("contact-us-2")
let newp2 = document.createElement("p");
newp2.innerText = "amet consectetur adipisicing elit. Corporis officia impedit enim iure ea nobis quasi officiis illum, debitis nihil non numquam quae in fugit adipisci? Ex architecto voluptas libero!";
let image2 = document.createElement("img");
image2.setAttribute("src", "https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");
let name2 = document.createElement("h5");
name2.innerText = "Pete Jones";


divimg2.appendChild(newp2);
divimg2.appendChild(image2)
divimg2.appendChild(name2);





let divimg3 = document.createElement("div")
divimg3.classList.add("contact-us-2")
let newp3 = document.createElement("p");
newp3.innerText = "amet consectetur adipisicing elit. Corporis officia impedit enim iure ea nobis quasi officiis illum, debitis nihil non numquam quae in fugit adipisci? Ex architecto voluptas libero!";
let image3 = document.createElement("img");
image3.setAttribute("src", "https://media.istockphoto.com/photos/portrait-of-smiling-teen-boy-outdoors-picture-id589098830");
let name3 = document.createElement("h5");
name3.innerText = "Mark Wilson";


divimg3.appendChild(newp3);

divimg3.appendChild(image3)
divimg3.appendChild(name3);


divesas.appendChild(divimg1);
divesas.appendChild(divimg2);
divesas.appendChild(divimg3);
belement.appendChild(divesas);
console.log(belement);