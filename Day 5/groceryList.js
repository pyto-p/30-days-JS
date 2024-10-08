const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

let hasMeat = shoppingCart.includes("Meat");
let hasSugar = shoppingCart.includes("Sugar");

if (!hasMeat) {
    shoppingCart.unshift("Meat");
}

if (!hasSugar) {
    shoppingCart.push("Sugar");
}

shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);