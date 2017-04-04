var CarLot = (function(carInventory){
	var carArray = [];

	carInventory.loadJSON = function() {
		var carInventoryRequest = new XMLHttpRequest();
		carInventoryRequest.addEventListener("load", CarLot.carParse);
		carInventoryRequest.addEventListener("error", CarLot.carFail);
		carInventoryRequest.open("GET", "javascripts/inventory.json");
		carInventoryRequest.send()
	}

	carInventory.carParse = function() {
		var carData = JSON.parse(this.responseText);
		CarLot.setCar(carData);
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
		console.log("carArray", carArray);	
	}

	carInventory.getCar = function() {
		return carArray;
	}

	return carInventory;
})(CarLot || {});