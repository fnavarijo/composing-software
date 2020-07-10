const pipe = require('lodash/fp/flow');

// f(g(x))
// f after g
const g = n => n + 1;
const f = n => n * 2;

const doStuff = x => {
  const afterG = g(x);
  const afterF = f(afterG);
  return afterF;
};

console.log(doStuff(20));

// Everytime you write a promise chain, we are composing software
const wait = time => new Promise(
  (resolve, reject) => setTimeout(
    resolve,
    time,
  )
);

wait(300)
  .then(() => 20)
  .then(g)
  .then(f)
  .then(value => console.log(value));

// When composing intentionally, we can do better
const doBetterStuff = x => f(g(x));

console.log(doBetterStuff(20))

// But, this way is difficult to debug. What should we do?
// Base debug example
const doStuffLogging = x => {
  const afterG = g(x);
  console.log(`after g : ${ afterG }`);
  const afterF = f(x);
  console.log(`after f : ${ afterF }`)
  return afterF;
};

doStuffLogging(20);

// Debugging with trace function
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const doStuffBetterLogging = x => {
  const afterG = g(x);
  trace('after g')(afterG);
  const afterF = f(afterG);
  trace('after f')(afterF);
  return afterF;
};

doStuffBetterLogging(20);

// Debugging with lodash pipe
const doStuffWithLodash = pipe(
  g,
  trace('[Lodash] after g'),
  f,
  trace('[Lodash] after f')
);

doStuffWithLodash(20);