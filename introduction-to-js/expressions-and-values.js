// Expression: Piece of code that evaluates to a value
7;

7 + 1; // 8

7 * 2; // 14

'Hello'; // Hello

// We can assign this expression a name. When we assign it to a variable
// The expression is first evaluated, and the returned value is assigned to
// the variable.

const hello = 'Hello';
hello; // Hello

// Composing Objects
const a = {
  a: 'a'
};

const b = {
  b: 'b'
}

const c = { ...a, ...b };
const d = Object.assign({}, a, b);