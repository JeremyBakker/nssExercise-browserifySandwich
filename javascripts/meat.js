"use strict";

let meatPrices = {
	"noMeat": 0.00,
	"ham": 1.00,
	"turkey": 1.00,
	"chickenBreast": 2.00,
  "salami": 2.00, 
  "undefined": 0.00
};

let addMeat = (meat) => {
  return meatPrices[meat];
};

module.exports = {addMeat};