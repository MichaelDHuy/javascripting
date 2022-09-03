//*Trash to treasure
const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  return bins;
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

//* Driving Mayo Daisy
const carPassing = function (cars, speed) {
  var newDate = Date.now(speed);
  var newObject = {};
  newObject.time = newDate;
  newObject.speed = speed;
  cars.push(newObject);
  return cars;
}
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38;
carPassing(cars, speed);

//* We're rooting for you
const judgeVegetable = function (vegetables, metric) {
  let bestVeggie = vegetables[0];
  for (let i = 0; i < vegetables.length; i++) {
  if (vegetables[i][metric] > bestVeggie[metric]) {
  bestVeggie = vegetables[i];
  }
  }
  return bestVeggie.submitter;
  };
  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 3,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 6,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 5,
      plumpness: 3
    }
  ]
  
  const metric = 'redness'
  
  judgeVegetable(vegetables, metric)
  console.log(judgeVegetable(vegetables, metric));