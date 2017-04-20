var CarLot = (function(carInventory){
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