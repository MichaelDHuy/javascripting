//*Array Ice-creams
let iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

iceCreamFlavours.push ("root beer");
console.log(iceCreamFlavours);
console.log(iceCreamFlavours[0]);
console.log(iceCreamFlavours[5]);
console.log(iceCreamFlavours.length);

//*Range
function range(start, end, step) {
  let someArray = [];
  if ((step <= 0) || (start > end) || (start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  }
  for (let i = start; i <= end; i += step) {
    someArray.push(i);
  } return someArray;
}

//*Last index of
function lastIndexOf(array, value){
  var foundMatch = false;
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] === value){
      result = i;
      foundMatch = true;
    }
  }
  if (foundMatch){
    return result;
  } else {
    return -1;
  }
}

//*Loopy Lighthouse 2
function loopyLighthouse(range, multiples, words) {
  for (var i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    }
    else if (i % multiples[0] === 0) {
      console.log(words[0]);
    }
  else if (i % multiples[1] === 0) {
    console.log(words[1]);
  }
  else {
    console.log(i);
  }
  }
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));

//*Concatenate array
function concat(array1, array2) {
  var array3 = [];
  array3 = array1.concat(array2);
  return array3;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

//*