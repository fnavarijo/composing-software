// Inmutablity
// impure addToCart mutates existing cart
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity,
  });
  return cart;
}

const originalCart = {
  items: [],
};

console.log(addToCart(originalCart, 'shoe', '2'));

// Pure addToCart() return a new cart
// It does not mutate the original
const addToCartPure = (cart, item, quantity) => {
  return {
    ...cart,
    items: cart.items.concat([
      { item, quantity }
    ]),
  };
}

const originalCartPure = {
  items: [],
};

const newCart = addToCartPure(
  originalCartPure,
  {
    name: 'Shoes'
  },
  1
);

console.log(JSON.stringify(originalCartPure, undefined, 1));