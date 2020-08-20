// Fist order functions
const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};

console.log(censor(['oops', 'gasp', 'shout', 'sun']));

// Reduce function
const reduce = (reducer, initial, arr) => {
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
}

console.log(reduce((accumulator, current) => accumulator + current, 0, [1, 2, 3]));

// Filter function using own reduce function
const filter = (filterCallback, list) =>
  reduce(
    (acc, current) => filterCallback(current) ? acc.concat(current): acc,
    [],
    list
  );

console.log(filter((item) => item.length !== 4, ['oops', 'gasp', 'shout', 'sun']));
