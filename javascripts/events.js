var CarLot = (function(carEvent){
	var carCards = document.getElementById("parking-spot");
	var carInput = document.getElementById("input-box");
	var carInformation = document.getElementsByClassName("thumbnail");
	var carCardLink = "";

// 8. When you click on one of the car elements, change the width of the border to a 
// higher value, and change the background color to any other color of your choosing.
	carEvent.clickCard = function(event) {
		for (var q = 0; q < carInformation.length; q++) {
			if (event.target.tagName === "DIV" && event.target.className === "col-sm-6 col-md-3 thumbnail car-" + q) {
				event.target.classList.add("wider-border");
		    } else if (event.target.className === "car-" + q) {
		    	event.target.parentNode.classList.add("wider-border");
		    }
		}
	    carInput.focus();
	    carCardLink = event.target.className;
	    carInput.addEventListener("keyup", carEvent.bindingToDescription);
	}

	carEvent.bindingToDescription = function(event) {
	  for (u = 0; u < carInformation.length; u++) {
	    if (event.keyCode === 13) {
	      if (carCardLink === "car-" + u) {
	        var resetBorder = document.getElementsByClassName(carCardLink);  
	        for (var x = 0; x < resetBorder.length; x++) {
	          if (resetBorder[x].tagName === "DIV") {
	            resetBorder[x].classList.remove("wider-border");
	          }
	        }
	      }
	      carEvent.clearInput();
	    } else if (carCardLink === "car-" + u) {
	      var additionalDescription = document.getElementById(u);
	      additionalDescription.innerHTML = carInput.value;
	    }  
	  }
	}

	carEvent.clearInput = function() {
	  carInput.blur();
	  carInput.value = "";
	}






carCards.addEventListener("click", carEvent.clickCard);

	return carEvent;
})(CarLot || {});

