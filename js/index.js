// alert('Im Working. Im JS. Im worth it.');

console.log('console_log');


// #1.6 variable
const a = 221;
let b = a-5;

// a = 4s; 
console.log(b, a);

//String
const what = "Blurome";
console.log(what);

// Boolean
const wat = true;

//Number
const w = 666;

//Float
const c = 55.1;


// Array
const monday = "Mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";

console.log(monday, tue, wed, thu, fri);
// -> 비효율적

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true];

console.log(daysOfWeek[2]);


const arrayOfPersonalData = ["Blue","55",true,["along the gods","kimchi"],{name:"kimchi",file:"save"}];

console.log(arrayOfPersonalData);

const objectOfPersonalData = {
   Name: "Helga",
   age : "unknown",
   gender: 'Female',
   inHandsome: true,
   favMovies: ["Along the gods","LOTR","Oldboy"],
   favFood: [{name:"Kimchi",fatty:false},
            {name:"Cheese burger",fatty:true}
            ],
}

console.log(objectOfPersonalData);

//---------------------------------------
function sayHello(name, age){
	return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas",14);
// greetNicolas 는 sayHello()함수의 return 값(value)이라는 의미.
// sayHello의 실행된 결과값이다.

console.log(greetNicolas);

//DOM----------------------------------
console.log(document);

// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "HI! From JS";

// -------------------------------------
title.style.color = "red";
console.log(title);

document.title = "I own you now";

//event ----------------------------------------

function handleResize(event){
   console.log(event); // -> 이벤트 객체가 호출됨.
	console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

function handleClick(event){
   console.log(event);
   title.style.color = "blue";
}

title.addEventListener("click",handleClick);



// ------
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
   mouseenter: function() {
     title.innerHTML = "Hi!";
     title.style.color = colors[0];
   },
   mouseleave: function() {
     title.innerHTML = "Bye!";
     title.style.color = colors[1];
   },
   resizing: function() {
     title.innerHTML = "resize. . .";
     title.style.color = colors[2];
   },
   rightClick: function() {
     title.innerHTML = "right Click";
     title.style.color = colors[4];
   }
 };
 
 title.addEventListener("mouseenter", superEventHandler.mouseenter);
 title.addEventListener("mouseleave", superEventHandler.mouseleave);
 window.addEventListener("resize", superEventHandler.resizing);
 window.addEventListener("contextmenu", superEventHandler.rightClick);
 
