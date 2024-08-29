// classes are blurprint of the source

class Vechile {
  // field
  // color: string = "Yellow";
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  drive(): void {
    console.log("TESLA X");
  }
  honk(): void {
    console.log("beep");
  }
}

class Car extends Vechile {
  wheels: number;

  constructor(wheels: number, color: string) {
    super(color);
  }
  off(): void {
    console.log("Stoped");
  }
  // overridden on child class
  drive(): void {
    console.log("Cyber trunk");
  }
}
const vechile = new Vechile("green");
vechile.drive();
vechile.honk();
console.log(vechile.color);

const car = new Car(3, "blue");
car.drive();
car.honk();
car.off();
