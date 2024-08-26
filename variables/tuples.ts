// array like structure where each element represents some property of record

const drink = {
  color: "Brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ["Black", true, 70];
const pepsi: Drink = ["Black", true, 70];
const sprite: Drink = ["White", true, 100];
// pepsi[0] = 40;
// pepsi[2] = "Black";

const carSpecs: [number, number] = [400, 3345];

const carStats = {
  horsePower: 400,
  weight: 3345,
};

console.log(carStats);
