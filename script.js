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

new Array(25).fill(0).forEach((e, i) =>
    setTimeout(() => {
        let frag = document
            .createDocumentFragment()
            .appendChild(document.createElement("div"));
        frag.className = "box";
        frag.addEventListener("click", calculator);
        container.appendChild(frag);
    }, 45 * i)
)

let body = document.getElementById("body");
let deg = 0;

setInterval(() => {
    if (deg < 359) {
        deg++;
    } else if (deg = 359) {
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

document.getElementById('add').addEventListener('click', () => calculator('+'));
document.getElementById('subtract').addEventListener('click', () => calculator('-'));
document.getElementById('multiply').addEventListener('click', () => calculator('*'));
document.getElementById('divide').addEventListener('click', () => calculator('/'));

Array.from(document.getElementsByClassName('calcNum')).forEach((x) => x.addEventListener('click', (e) => {
    document.getElementById('calcDisplay').innerText += e.target.innerText;
}))

function calculator(x) {
    let first = parseInt(document.getElementById('calc1').value);
    let second = parseInt(document.getElementById('calc2').value);
    let answer;
    switch (x) {
        case '+':
            answer = first + second
            break;
        case '-':
            answer = first - second
            break;
        case '*':
            answer = first * second
            break;
        case '/':
            answer = first / second
            break;
    }
    document.getElementById('answer').innerText = answer;
}

function fizzbuzz() {
    let fizzbuzzing = true;
    do {
        let x = prompt("Enter Number");
        if (parseInt(x)) {
            if (x % 15 === 0) {
                fizzbuzzing = false;
                return "fizzbuzz";
            } else if (x % 5 === 0) {
                fizzbuzzing = false;
                return "buzz";
            } else if (x % 3 === 0) {
                fizzbuzzing = false;
                return "fizz";
            } else {
                fizzbuzzing = false;
                return x;
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
// for (let i = 1; i < 4; i++) {
//     window[`num` + i] = Math.floor(Math.random() * 30) + 1;
// }

// console.log(`num1: ${num1}`);
// console.log(`num2: ${num2}`);
// console.log(`num3: ${num3}`);

// let s = "'single'"
// let d = '"double"'
// let b = "`backtick`"
// console.log(s,d,b)

// let speech = `Martin Luther King Jr. said, "I have a dream..."`
// console.log(speech);
// let tip = "We can escape quotes by using \\"
// console.log(tip);

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let ul = '<ul>';
// for (let i = nums.length - 1; i >= 0; i -= 2) {
//     (ul += `<li>${nums[i]}</li>`)
// }
// ul += '</ul>';

// let list = document.getElementById('list')
// list.innerHTML = ul;

// Array Ex 1
// let cars = ['Ford', 'Honda', 'Toyota', 'Volkswagen'];
// let carsList = '<p>';
// cars[0] = 'Tesla';
// cars[cars.length] = 'Mercedes';
// cars.forEach((e) => carsList += e);
// carsList += '</p>'
// list.innerHTML += carsList + ` ${cars.length}`;
// console.log(cars.length)

// Array Ex 2
// function multiplyArrays(x, y) {
//     let result = [];
//     x.forEach((x, i) => {
//         result.push(x * y[i])
//     })
//     return result;
// }

// let answer = multiplyArrays([1, 2, 3, 4], [5, 6, 7, 8]);
// console.log(answer);

// Array Ex 3
function multiplyMatrices(x, y) {
    let result = [[], []];

    x.forEach((xv, xi) => {
        y.forEach((yv, yi) => {
            result[xi].push(x[xi][0] * y[0][yi] + x[xi][1] * y[1][yi])
        })
    })
    return result;
}

let matrix = multiplyMatrices([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
console.log(matrix);

// let colors = function(){
//     console.log('red\nblue\npurple');
// }

// let newColors = colors;
// newColors();

// let sum = (a,b) => a + b;
// let isPositive = number => number >= 0;
// let randomNumber = () => Math.random();
// document.addEventListener('click', () => console.log('Click here'));

// let isaac = (a, b) => console.log(`Hello Isaac. You are a ${a} & ${b}`)
// document.addEventListener('load', isaac('cool', 'smart guy'))

let slides = ['https://www.minecraft.net/content/dam/archive/4da5ff0255092969c073274e0430e52d-6.png',
'https://www.minecraft.net/content/dam/archive/81ebdebf3e2b3f2fc7e0dfa2292d6f03-1.png',
'https://www.minecraft.net/content/dam/archive/e613e23d3dde6f6b1a90c1f563c1b59d-Realms.jpeg',
'https://www.minecraft.net/content/dam/minecraft/article-pictures/Article-thumbnail-1-277x277.jpg',
'https://www.minecraft.net/content/dam/games/minecraft/key-art/bee-2x2.jpg']

let slideI = 0
document.getElementById('slidesI').innerText = slideI + 1
let slideshowWrap = document.getElementById('slideshowWrap');
let slideshow = document.getElementById('slideshow');
slideshow.src = slides[slideI];
document.getElementById('slideRight').addEventListener('click', () => {
    slideI < slides.length -1 ? slideI++ : slideI = 0
    slideshow.src = slides[slideI];
    document.getElementById('slidesI').innerText = slideI + 1
})
document.getElementById('slideLeft').addEventListener('click', () => {
    slideI > 0  ? slideI-- : slideI = slides.length - 1
    slideshow.src = slides[slideI];
    document.getElementById('slidesI').innerText = slideI + 1
})