"use strict";

let totalPrice = 0;


let addTopping = (toppingPrice) => {
    totalPrice += toppingPrice;
};

let pricePlease = (finalPrice) => {
  	finalPrice = totalPrice;
  	return finalPrice;
};

module.exports = {addTopping, pricePlease};