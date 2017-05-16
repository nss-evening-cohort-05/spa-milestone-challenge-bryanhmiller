var CarLot = (function(carEvent){
// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment 
// it two times in separate JavaScript files.
// 3. The second IIFE should augment the original one with a function that creates all 
// of the `eventHandlers` that you need for the application. Name the function 
// `activateEvents`.


	var carCards = document.getElementById("parking-spot");
	var carInput = document.getElementById("input-box");
	var carInformation = document.getElementsByClassName("thumbnail");
	var carCardLink = "";

	carEvent.clearCards = function () {
		for (var s = 0; s < carInformation.length; s++) {
			carInformation[s].classList.remove("wider-border");
		}
	}

// 8. When you click on one of the car elements, change the width of the border to a 
// higher value, and change the background color to any other color of your choosing.
	carEvent.clickCard = function(event) {
		carEvent.clearCards();
// 4b.  The other function changes the thickness of the border of a car 
// element, and changes its background color. The function must accept two arguments.
//     1. A car DOM element that was clicked on.
		for (var q = 0; q < carInformation.length; q++) {
			if (event.target.tagName === "DIV" && event.target.className === "col-sm-6 col-md-3 thumbnail car-" + q) {
				event.target.classList.add("wider-border");
		    } else if (event.target.className === "car-" + q) {
		    	event.target.parentNode.classList.add("wider-border");
		    }
		  //    else if (event.target.className !== "col-sm-6 col-md-3 thumbnail car-" + q || event.target.className !== "car-" + q) {
				// var resetBorder = document.getElementsByClassName(carCardLink); 
				// resetBorder[q].classList.remove("wider-border");	    	
		  //   }
		}
	    carInput.focus();
  	    carCardLink = event.target.className;
  	    if (carCardLink === "car-" + q) {
  	    	carCardLink = carCardLink.parentNode;
  	    }
	    console.log(carCardLink);
	    carInput.addEventListener("keyup", carEvent.bindingToDescription);
	}



// 4a. The final IIFE should augment the object with two more functions. One function 
// resets the border thickness and background color for each car element back to the 
// original values. 
	carEvent.bindingToDescription = function(event) {
	  	for (var u = 0; u < carInformation.length; u++) {
		    if (event.keyCode === 13) {
		      	// if (carCardLink === "col-sm-6 col-md-3 thumbnail car-" + u) {
		      	carEvent.clearCards();
				// var resetBorder = document.getElementsByClassName(carCardLink);  
			 //    	for (var x = 0; x < resetBorder.length; x++) {
			 //      		if (resetBorder[x].tagName === "DIV") {
			 //        	resetBorder[x].classList.remove("wider-border");
		    	carEvent.clearInput();
	       
	    

// 9. Also, on click of the car element, clear the value of the text input in the 
// navbar, and put the cursor in the text input.
// 10. When you start typing into the navbar's text input, the **description**, and only 
// that property, of the currently selected car should be bound to what you are typing 
// in and match it exactly.
	    	} else if (carCardLink === "col-sm-6 col-md-3 thumbnail car-" + u) {
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

