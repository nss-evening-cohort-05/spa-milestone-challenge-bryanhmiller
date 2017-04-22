var CarLot = (function(carInventory){
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment 
// it two times in separate JavaScript files.
// 2. The first IIFE should add a public function (e.g. `loadInventory`) that loads 
// the `inventory.json` file and stores the inventory in a private variable. It should 
// also expose a public getter to read the array of cars (e.g. `getInventory`).


	var carArray = [];

// 2a. When your page first loads, you need to use an XHR to load the contents of the JSON 
// file, 
	carInventory.loadJSON = function() {
		var carInventoryRequest = new XMLHttpRequest();
		carInventoryRequest.addEventListener("load", CarLot.carParse);
		carInventoryRequest.addEventListener("error", CarLot.carFail);
		carInventoryRequest.open("GET", "javascripts/inventory.json");
		carInventoryRequest.send()
	}

// 2b and parse them into a native JavaScript object.
	carInventory.carParse = function() {
		var carData = JSON.parse(this.responseText).cars;
		CarLot.populateCarCards(carData);
	}

	carInventory.carFail = function(){
		console.log("boooo");
	}

	carInventory.setCar = function(xhrData) {
		var currentCar;
		for ( j = 0; j < xhrData.cars.length; j++ ) { 
			currentCar = xhrData.cars[j];
			carArray.push(currentCar);
		}
	}

	carInventory.getCar = function() {
		return carArray;
	}

	return carInventory;
})(CarLot || {});