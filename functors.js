// Array.proptotype.map() abstracts the data type from the mapping
// utility to make usable with any data type. 

const double = n => n * 2;
const doubleMap = numbers => numbers.map(double);

console.log(doubleMap([2, 3, 4]));

// what if want to modify points on an object
// we only modify double
const double2 = n => n.points * 2;
const doubleMap2 = numbers => numbers.map(double2);

console.log(doubleMap2([
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4 },
]));