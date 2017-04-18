var CarLot = (function(carInventory){
var carCards = document.getElementById("parking-spot");

function startTheCarLot() {
	CarLot.loadJSON();
	// populateCarCards();
}

	carInventory.populateCarCards = function(carData) {
		var carArray = carData;
		var currentCar = "";
		var carInfo = "";
		for (var i = 0 ; i < carArray.length ; i++) {
			currentCar = carArray[i];
			carInfo += `<div id="card" class="col-sm-6 col-md-3 thumbnail car-${i}">`;
			carInfo += `<section class="car-${i}">${currentCar.year} ${currentCar.make} ${currentCar.model}</section>`;
			carInfo += `<img class="car-${i}" src="${currentCar.image}"/>`;
			carInfo += `<p class="car-${i}" id="${i}">${currentCar.description}</p>`;
			carInfo += `</div>`;
		}
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


