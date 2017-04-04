function carParse() {
	console.log("loaded");
	var data = JSON.parse(this.responseText);
	console.log("data", data)
}

function carFail(){
	console.log("boooo");
}

var carInventoryRequest = new XMLHttpRequest();
carInventoryRequest.addEventListener("load", carParse);
carInventoryRequest.addEventListener("error", carFail);
carInventoryRequest.open("GET", "javascripts/inventory.json");
carInventoryRequest.send()


