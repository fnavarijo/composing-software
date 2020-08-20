const { curry } = require('lodash');

const gte = cutoff => n => n >= cutoff;
const gte4 = gte(4);

gte4(6); // true
gte4(3); // false

// Using autocurry
const add3 = curry((a, b, c) => a + b + c);
console.log(add3(1, 2, 3));
console.log(add3(1, 2)(3));
console.log(add3(1)(2, 3));
console.log(add3(1)(2)(3));