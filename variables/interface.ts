let personName = "Nithin"; // type : string

let age; // type : any
age = 23;

// when to use annotations
// function that returns the 'any' type
const json = '{ "x": 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json); // type : any when no annotations
console.log(coordinates);

// when we declare a variable on one line and initialized it later

let words = ["red", "green", "blue"];

let foundWords: boolean; // any

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWords = true;
  }
}

// varaible whose type cannot be infered coorectly

let numbers = [-10, -1, 12];

let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}

console.log("hello");

const cars = carMakers[0]; // string
const myCar = carMakers.pop(); // string
// helps to prevent incomptable values
// carMakers.push(6); // Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// help with map

const newCar = carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(newCar);

// flexible types
// const importantDates: (string | Date)[]

const importantDates: (Date | string)[] = [new Date(), "2039-10-10"];
importantDates.push("Hello");
