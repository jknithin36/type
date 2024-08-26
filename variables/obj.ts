const profile = {
  name: "Nithin",
  age: 23,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age: personAge }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// ARRAYS
const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

// nested array
const carsByMake: string[][] = [["f150"], ["corolla"], ["Camaro"]];
