"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
];



let names = [];
let sortedNames = [];
let numProducts = products.length;

for (let i = 0; i < numProducts; i++) {
    names.push(products[i].product);
}

sortedNames = names.sort(); 
console.log(sortedNames);
console.log("-------------------------------");

let prices = [];
let sortedPrices = [];
for ( let i = 0; i < numProducts; i++) {
    prices.push(products[i].price);
}

function compareDescendingNumbers (a, b) {
    if (a.item < b.item) 
        return -1;
    
    else if (a.item == b.item) 
        return 0;
    
    else if ( a.item > b.item) 
        return 1;


}

sortedPrices = prices.sort(compareDescendingNumbers );
console.log(sortedPrices);