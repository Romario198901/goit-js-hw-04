function isEnoughCapacity(products, containerSize) {
  const productsQuantity = Object.values(products);
  let sum = 0;
  for (const value of productsQuantity) {
    sum += value;
  }
  if (sum <= containerSize) {
    return true;
  }
  return false;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));

function isEnoughCapacity2(products, containerSize) {
  let sum = 0;
  for (const key in products) {
    sum += products[key];
  }
  if (sum <= containerSize) {
    return true;
  }
  return false;
}
console.log(isEnoughCapacity2({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity2({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity2({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity2({ apples: 18, potatoes: 5, oranges: 2 }, 7));
