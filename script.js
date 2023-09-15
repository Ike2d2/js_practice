"use strict";

let bool = true;
let number = 420;
let string = "Hello World";
let object = {};
function func() {}
let sum = 1 + 2;
let concat = "one " + "two";
// console.log(`[Sum]: ${sum}`);
// console.log(`[Concat]: ${concat}`);

let container = document.getElementById("container");

for (let i = 0; i < 25; i++) {
  setTimeout(function () {
    let frag = document
      .createDocumentFragment()
      .appendChild(document.createElement("div"));
    frag.className = "box";
    frag.addEventListener("click", pink);
    container.appendChild(frag);
  }, 45 * i);
}

// let root = document.getRootNode();
// for(let i=1;i;i++){
//     root.style.backgroundColor = i % 2 === 0 ? '#f00' : '#00f'
// }

let isaac = {
  firstName: "Isaac",
  lastName: "Stark",
  age: 23,
  address: null,
};

let santa = {
  firstName: "Santa",
  lastName: "Claus",
  age: 23,
  address: "The North Pole",
};

function locate(person) {
  person.address === null
    ? console.log(`${person.firstName} is homeless`)
    : console.log(`${person.firstName} lives at ${person.address}`);
}

// locate(isaac);
// locate(santa);

function quadArea(width, height = width) {
  console.log("Area of quadrilateral is: " + width * height);
}

// quadArea(4, 7);
// quadArea(18, 213124);
// quadArea(3);

function calculator() {
  let first = prompt("Enter first number:");
  let second = prompt("Enter second number");
}

function fizzbuzz() {
  let fizzbuzzing = true;
  do {
    let x = prompt("Enter Number");
    if (parseInt(x)) {
      if (x % 15 === 0) {
        return "fizzbuzz";
        fizzbuzzing = false;
      } else if (x % 5 === 0) {
        return "buzz";
        fizzbuzzing = false;
      } else if (x % 3 === 0) {
        return "fizz";
        fizzbuzzing = false;
      } else {
        return x;
        fizzbuzzing = false;
      }
    } else {
      alert("Please Enter A Number");
    }
  } while (fizzbuzzing);
}

function pink(e) {
  e.target.classList.toggle("pink");
  e.target.innerText = e.target.innerText === "" ? fizzbuzz() : "";
}

function checkTime() {
  let time = document.getElementById("time");

  if (!isNaN(time.value)) {
    let display = document.getElementById("display");
    display.innerText = rangeCheck(time.value);
  } else {
    alert("Please Enter A Number");
  }
}

function rangeCheck(x) {
  console.log("checking");
  console.log(x);
  if (x >= 0 && x <= 12) return "Good Morning";
  else if (x >= 13 && x <= 16) return "Good Afternoon";
  else if (x >= 17 && x <= 19) return "Good Evening";
  else if (x >= 20 && x <= 24) return "Good Night";
  else "help";
}

document.getElementById("checkTime").addEventListener("click", checkTime);
