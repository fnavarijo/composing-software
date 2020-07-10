// inheritance
class Foo {
  constructor () {
    this.a = 'a';
  }
}

class Bar extends Foo {
  constructor () {
    super();
    this.b = 'b';
  }
}


const myBar = new Bar(); // { a: 'a', b: 'b' }

// mixin composition (object concatenation)
const a = {
  a: 'a',
};

const b = {
  b: 'b',
};

const c = { ...a, ...b }; // { a: 'a', b: 'b' }