// Imperative
const doubleMapImperative = numbers => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log(doubleMapImperative([2, 3, 4]));

// Declarative
const doubleMapDeclarative = numbers => numbers.map(n => n * 2);

console.log(doubleMapDeclarative([2, 3, 4]));