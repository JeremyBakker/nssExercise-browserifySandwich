"use strict";

let vegetable = require("./vegetable.js"),
	sandwichMaker = require("./sandwichMaker.js"),
	meat = require("./meat.js"),
	condiments = require("./condiments.js"),
	cheese = require("./cheese.js"),
	bread = require("./bread.js");

let finalSandwichPrice = 0;

let meatSelect = document.getElementById("meatSelect");
let breadSelect = document.getElementById("breadSelect");
let cheeseSelect = document.getElementById("cheeseSelect");
let vegetableSelect = document.getElementById("vegetableSelect");
let condimentSelect = document.getElementById("condimentSelect");

let button = $("#submit");
let toppingPrice = 0;


$("#submit").click((event)=> {
	let breadArray = [];
	let meatArray = [];
	let cheeseArray = [];
	let vegetableArray = [];
	let condimentArray = [];
	for (var i = 0; i < 5; i++) {
		if (breadSelect[i].selected === true) {
			breadArray.push(breadSelect[i].value);
		} 
		if (meatSelect[i].selected === true) {
			meatArray.push(meatSelect[i].value);
		}
		if (cheeseSelect[i].selected === true) {
			cheeseArray.push(cheeseSelect[i].value);
		}
		if (vegetableSelect[i].selected === true) {
			vegetableArray.push(vegetableSelect[i].value);
		}
		if (condimentSelect[i].selected === true) {
			condimentArray.push(condimentSelect[i].value);
		}
	}

	let meatCost = 0;
	for (i = 0; i < meatSelect.length; i++) {
		meatCost += meat.addMeat(meatArray[i]);
	}
	sandwichMaker.addTopping(meatCost);
	let breadCost = 0;
	for (i = 0; i < breadSelect.length; i++) {
		breadCost += bread.addBread(breadArray[i]);
	}
	
	sandwichMaker.addTopping(breadCost);
	let cheeseCost = 0;
	for (i = 0; i < cheeseSelect.length; i++) {
		cheeseCost += cheese.addCheese(cheeseArray[i]);
	}
	
	sandwichMaker.addTopping(cheeseCost);
	let condimentCost = 0;
	for (i = 0; i < condimentSelect.length; i++) {
		condimentCost += condiments.addCondiment(condimentArray[i]);
	}
	
	sandwichMaker.addTopping(condimentCost);
	let vegetableCost = 0;
	for (i = 0; i < vegetableSelect.length; i++) {
		vegetableCost += vegetable.addVegetable(vegetableArray[i]);
	}
	sandwichMaker.addTopping(vegetableCost);
	

	toppingPrice = meatCost + breadCost + cheeseCost + condimentCost + vegetableCost;
	
	
	let returnedPrice = sandwichMaker.pricePlease();
	document.getElementById("output").value = returnedPrice;
});