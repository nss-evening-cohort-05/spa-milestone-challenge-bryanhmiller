var carCards = document.getElementById("parking-spot");

function startTheCarLot() {
	CarLot.loadJSON();
}

function populateCarCards() {
	var carArray = CarLot.getCar();
	var carInfo = "";
	for ( i = 0 ; i < carArray.length ; i++) {
		var currentCar = carArray[i];
		carInfo += `<div class="col-sm-6 col-md-6 thumbnail car-${i}">`;
		carInfo += `</div>`;
	}
	carCards.innerHTML = carInfo;
}


startTheCarLot();

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


