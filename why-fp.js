// shared state
const x = {
  val: 2,
};

const x1 = () => x.val += 1;

const x2 = () => x.val *= 2;

x1();
x2();

console.log(x.val);

// this example is the same as above, but the order of
// functions calls are reversed
const y = {
  val: 2,
};

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;

y2();
y1();

console.log(y.val);

// Avoid shared state, Pure functions
const z = {
  val: 2,
};

const inc = z => ({ ...z, val: z.val + 1 }); // copying props, for inmutabilitu
const double = z => ({ ...z, val: z.val * 2 });

console.log(inc(double(z)));

const a = {
  val: 2,
}

console.log(inc(double(a))); // function composition

/*
* Of course, if you change to order of the composition, the output will change
* Order of operations still matters
* f(g(x)) will not always be g(f(x))
* BUT what doesn't matter anymare is what happens to variables outside of functions.
*/

// Inmutability
// Freeze() freezes and object one level deep
const inmu = Object.freeze({
  foo: 'Hello',
  bar: 'World',
  baz: '!',
});

inmu.foo = 'Goodbye';

// Freeze dont freeze nested objects
const mutable = Object.freeze({
  foo: { greeting: 'Hello' },
  bar: 'World',
  baz: '!'
});

mutable.foo.greeting = 'Goodbye';

console.log(`${mutable.foo.greeting}, ${mutable.bar}${mutable.baz}`)
