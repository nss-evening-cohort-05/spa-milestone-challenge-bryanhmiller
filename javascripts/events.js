var CarLot = (function(carEvent){
var carCards = document.getElementById("parking-spot");


	carEvent.clickCard = function(event) {
		var carInformation = document.getElementsByClassName("thumbnail");
		for (var q = 0; q < carInformation.length; q++) {
			console.log("event.target.className", event.target.classList.contains("cars-" + q));
			console.log("col-sm-6 col-md-3 thumbnail car-" + q);
			console.log(event.target.className)
			if (event.target.tagName === "DIV" && event.target.className === "col-sm-6 col-md-3 thumbnail car-" + q) {
				console.log("event.target", event.target);

				event.target.classList.add("wider-border");
		    } else if (event.target.className === "cars-" + q) {
		    	console.log("2nd if");
		    	event.target.parentNode.classList.add("wider-border");
		    }
		}
	}


carCards.addEventListener("click", carEvent.clickCard);

	return carEvent;
})(CarLot || {});

