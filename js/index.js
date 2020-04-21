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


const arrayOfPersonalData = ["Blue","55",true,"Seoul"];

console.log(arrayOfPersonalData[0]);

const objectOfPersonalData = {
   Name: "Helga",
   age : "unknown",
   gender: 'Female',
   inHandsome: true,
   favMovies: ["Along the gods","LOTR","Oldboy"],
   favFood: [{name:"Kimchi",fatty:false},
            {name:"Cheese burger",fatty:true}
            ]
}

console.log(objectOfPersonalData);
