var CarLot = (function(carInventory){
var carCards = document.getElementById("parking-spot");

function startTheCarLot() {
	CarLot.loadJSON();
	// populateCarCards();
}

// 3. Loop over your array of cars and build up an HTML string to build a card for each 
// car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure 
// you have a parent element with a class of `container`. __Hint:__ You must build up the 
// entire string of columns/rows before injecting into the DOM. Use a counter variable 
// to know when to close a row after three columns.
	carInventory.populateCarCards = function(carData) {
		var carArray = carData;
		var currentCar = "";
		var carInfo = "";
		carInfo += `<div class="container">`;
		for (var i = 0 ; i < carArray.length ; i++) {
			currentCar = carArray[i];
			carInfo += `<div class="col-sm-6 col-md-3 thumbnail car-${i}">`;
			carInfo += `<section class="car-${i}">${currentCar.year} ${currentCar.make} ${currentCar.model}</section>`;
			carInfo += `<img class="car-${i}" src="${currentCar.image}"/>`;
			carInfo += `<p class="car-${i}" id="${i}">${currentCar.description}</p>`;
			carInfo += `</div>`;
			if ((i + 1) % 3 === 0) {
				carInfo += `</div><div class="container">`;
			}
		}
		carInfo += `</div>`;
		carCards.innerHTML = carInfo;
	}


startTheCarLot();

	return carInventory;
})(CarLot || {});
// Code moved to loadInventory.js 4-3-17 20:30

// function carParse() {
// 	console.log("loaded");
// 	var data = JSON.parse(this.responseText);
// 	console.log("data", data)
// }

// function carFail(){
// 	console.log("boooo");
// }

// var carInventoryRequest = new XMLHttpRequest();
// carInventoryRequest.addEventListener("load", carParse);
// carInventoryRequest.addEventListener("error", carFail);
// carInventoryRequest.open("GET", "javascripts/inventory.json");
// carInventoryRequest.send()


