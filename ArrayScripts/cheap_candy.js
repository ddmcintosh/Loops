"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
];

let numProducts = products.length;
let cheapCandy = [];
let mm = [];
let swedishfish = [];

for (let i = 0; i < numProducts; i++) {
    if (Number(products[i].price) < 4.00) {
        cheapCandy.push(products[i].product);
        console.log(" Theses are the cheapest candies: " + cheapCandy);
    }
    if (products[i].product.indexOf("M&M") !=-1 ) {
        mm.push(products[i].product);
        console.log(" Candies that contain M&M " + mm);
    }
    if (products[i].product == ("Swedish Fish")) {
        console.log(" Yes we carry swedishfish " + swedishfish);
    }
}

