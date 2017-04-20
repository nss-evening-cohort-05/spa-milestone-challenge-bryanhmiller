var CarLot = (function(carEvent){
var carCards = document.getElementById("parking-spot");


	carEvent.clickCard = function(event) {
		var carInformation = document.getElementsByClassName("thumbnail");
		for (var q = 0; q < carInformation.length; q++) {
			if (event.target.tagName === "DIV" && event.target.className === "col-sm-6 col-md-3 thumbnail car-" + q) {
				event.target.classList.add("wider-border");
		    } else if (event.target.className === "car-" + q) {
		    	event.target.parentNode.classList.add("wider-border");
		    }
		}
	}


carCards.addEventListener("click", carEvent.clickCard);

	return carEvent;
})(CarLot || {});

