"use strict";

let cheesePrices = {
	"noCheese": 0.00,
	"cheddar": 0.50,
	"swiss": 0.50,
	"montereyJack": 1.00,
  "provolone": 1.00,
  "undefined": 0.00,
};

let addCheese = function(cheese) {
  return cheesePrices[cheese];
};

module.exports = {addCheese};