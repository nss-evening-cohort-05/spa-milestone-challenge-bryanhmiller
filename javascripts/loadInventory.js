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
		console.log("loaded");
		var data = JSON.parse(this.responseText);
		console.log("data", data)
	}

	carInventory.carFail = function(){
		console.log("boooo");
	}

	carInventory.setCar = function(newCar) {
		carArray.push(newCar);
	}

	carInventory.getCar = function() {
		return carArray;
	}

	return carInventory;
})(CarLot || {});