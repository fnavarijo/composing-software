const { values } = require("lodash");

const add = x => y => x + y;

const result = add(10)(6);

console.log(result);

// Point free style
const inc = add(1);
console.log(inc(3));

// Compose function
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const g = n => n + 1;
const f = n => n * 2;

console.log(compose(f, g)(20))

// Tracing the values
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
}

console.log(compose(
  trace('after f'),
  f,
  trace('after g'),
  g
  )(20)
);

// Using pipe
const pipe = (...funcs) => x => funcs.reduce((y, f) => f(y), x);
const h = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);

console.log(h(20))