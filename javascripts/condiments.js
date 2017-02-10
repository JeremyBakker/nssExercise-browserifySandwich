"use strict";

var condimentPrices = {
	"noCondiment": 0.00,
	"mustard": 0.10,
	"mayonnaise": 0.10,
	"vinegarAndOil": 0.10,
  "saltAndPepper": 0.10,
  "undefined": 0.00
};

let addCondiment = (condiment) => {
  return condimentPrices[condiment];
};

module.exports = {addCondiment};
