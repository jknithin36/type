interface Reportable {
  // model: string;
  // // year: number;
  // year: Date;
  // broken: boolean;
  summary(): string;
}

const drink = {
  color: "brown",
  carbonated: false,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};
const oldCivic = {
  model: "ciciv",
  year: new Date(),
  broken: false,
  summary(): string {
    return `This is an Excellent  ${this.model} go and buy it if you need`;
  },
};

// const printVechile = function (vechile: {
//   model: string;
//   year: number;
//   broken: boolean;
// }): void {
//   console.log(`Name: ${vechile.model}`);
//   console.log(`Year : ${vechile.year}`);
//   console.log(`Broken : ${vechile.broken}`);
// };
const printSummary = function (item: Reportable): void {
  // console.log(`Name: ${vechile.model}, ${typeof vechile.model}`);
  // console.log(`Year : ${vechile.year} , ${typeof vechile.year}`);
  // console.log(`Broken : ${vechile.broken} , ${typeof vechile.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

// type annotations in functions is harder to read if we have really long annotations

// solution Using Interface
