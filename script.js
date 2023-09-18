"use strict";

// let bool = true;
// let number = 420;
// let string = "Hello World";
// let object = {};
// function func() {}
// let sum = 1 + 2;
// let concat = "one " + "two";
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

let body = document.getElementById("body");
let deg = 0;

setInterval( () => {
    if (deg < 359) {
        deg++;
    } else if (deg =359) {
        deg = 0;
    }
    body.style.backgroundColor = `hsl(${deg}, 100%, 85%)`;
}, 300);


// let isaac = {
//   firstName: "Isaac",
//   lastName: "Stark",
//   age: 23,
//   address: null,
// };

// let santa = {
//   firstName: "Santa",
//   lastName: "Claus",
//   age: 23,
//   address: "The North Pole",
// };

// function locate(person) {
//   person.address === null
//     ? console.log(`${person.firstName} is homeless`)
//     : console.log(`${person.firstName} lives at ${person.address}`);
// }

// locate(isaac);
// locate(santa);

// function quadArea(width, height = width) {
//     console.log("Area of quadrilateral is: " + width * height);
// }

// quadArea(4, 7);
// quadArea(18, 213124);
// quadArea(3);

// function calculator() {
//     let first = prompt("Enter first number:");
//     let second = prompt("Enter second number");
//     alert(first + second);
// }

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

// I know a few digits of PI
// const PI = 3.14159265358979323846264338327950288419716939936;
// const num = PI.toFixed(2);
// const num2 = PI.toPrecision(5);
// console.log(num);
// console.log(num2);
// console.log(Math.PI);

// let mill = 1e6;
// console.log(mill.toExponential())

// const PI = Math.PI;
// let min = Math.min(1, 2, 3, 233, 45, 78, 3000);
// let pow = Math.pow(5, 3);
// console.log(pow);
// pow = 5 ** 3;
// console.log(pow)
// ** is cooler than Math.pow()

// Dynamic Variables because swag
for (let i = 1; i < 4; i++) {
    window[`num` + i] = Math.floor(Math.random() * 30) + 1;
}

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
console.log(`num3: ${num3}`);

// let s = "'single'"
// let d = '"double"'
// let b = "`backtick`"
// console.log(s,d,b)

// let speech = `Martin Luther King Jr. said, "I have a dream..."`
// console.log(speech);
// let tip = "We can escape quotes by using \\"
// console.log(tip);