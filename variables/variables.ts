const firstName: string = "Nithin";
let appleCount: number = 5;
// appleCount = "78"; Error: Type 'string' is not assignable to type 'number'.ts(2322)
// firstName = 34; ERROR
let hasName: boolean = true;
// hasName = "Nithin";// Error
let nothingMuch: null = null;
// nothingMuch = 34; ERROR
let nothing: undefined = undefined;

// builtin Objects

let now: Date = new Date();

// Arrays

let colors: string[] = ["jk", "Nithin", "Kumar"];
// colors.push(7); // ERROR
colors.push("Hello");
let myNumbers: number[] = [1, 2, 3];

// classes

class Car {}

let car: Car = new Car();

// Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

logNumber(3);
