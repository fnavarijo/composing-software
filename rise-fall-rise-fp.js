const compose = (f, g) => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;

const transform = compose(double, inc);

console.log(transform(3));