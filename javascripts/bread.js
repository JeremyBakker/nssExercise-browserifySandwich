"use strict";

let breadPrices = {
	"noBread": 0.00,
	"wheat": 1.00,
	"white": 1.00,
	"sourdough": 2.00,
  "pumpernickel": 2.00,
  "undefined": 0.00
};
  
let addBread = (bread) => {
  return breadPrices[bread];
};

module.exports = {addBread};
