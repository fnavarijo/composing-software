// Rest: Gather together a group of renamining arguments. 

const aTail = (head, ...tail) => tail;
aTail(1, 2, 3); // [2, 3]

// Spread: Spread the elements of an array into individual elements. 
const shiftToLast = (head, ...tail) => [...tail, head];
shiftToLast(1, 2, 3); // [2, 3, 1]