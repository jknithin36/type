// type of arguments function will receive and what type of value it return

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(3, 6));

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void and never

const logger = (message: string): void => {
  console.log(message);
  // return "Hello"; // Error
};
// void : it is not reurning anything

const throwError = (message: string): never => {
  throw new Error(message);
};

// never : it is never going to execute full code

const earlyReturn = (message: string): string => {
  if (!message) {
    throw new Error("No Message");
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (foreCast: { date: Date; weather: string }): void => {
  console.log(foreCast.date);
  console.log(foreCast.weather);
};

logWeather(todaysWeather);
//
const logWeathe2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeathe2(todaysWeather);
