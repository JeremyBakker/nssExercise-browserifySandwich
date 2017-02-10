"use strict";

let vegetablePrices = {
	"noVegetable": 0.00,
	"tomato": 0.25,
	"lettuce": 0.25,
	"onion": 0.25,
  "greenPepper": 0.25,
  "undefined": 0.00
};

let addVegetable = (vegetable) => {
  return vegetablePrices[vegetable];
};

module.exports = {addVegetable};