//*Voting station calculation//
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function (stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations
}
console.log(chooseStations(stations));

//*Mark the perfect shot//
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function (moves) {
  const perfect = [0,0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      perfect[1] += 1;
    }
    if (moves[i] === "south") {
      perfect[1] -= 1;
    }
    if (moves[i] === "east") {
      perfect[0] += 1;
    }
    if (moves[i] === "west") {
      perfect[0] -= 1;
    }
  }
  return perfect
}
console.log(finalPosition(moves));

//*Age calculator//
function ageCalculator (name, yob, cy) {
  let currentAge = cy - yob;
  return name + " is " + currentAge + " years old."
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//*How Many Hundreds//
function howManyHundreds(bottles) {
  return Math.trunc(bottles / 100);
} 
console.log(howManyHundreds(1000));

//*Areas calculator//
function calculateRectangleArea(length, width) {
  let rectangleArea = length * width;
  if (length > 0 && width > 0) {
    return rectangleArea
  }
}
function calculateTriangleArea(base, height) {
  let triangleArea = base * (height / 2);
  if (base > 0 && height > 0) {
    return triangleArea
  }
}
function calculateCircleArea (radius) {
  let circleArea = Math.pow(radius, 2) * Math.PI;
  if (radius > 0) {
    return circleArea
  }
}
console.log(calculateRectangleArea(10, 5));
console.log(calculateTriangleArea(10, 5));
console.log(calculateCircleArea(10));

