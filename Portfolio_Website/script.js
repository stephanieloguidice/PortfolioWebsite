//Making the active tab a different color from the rest of them//

//get container element
var navContainer = document.getElementById("navbar")

//get all nav tabs with class = "nav" inside the container
var nav = navContainer.getElementsByClassName("nav");

//loop though the buttons and add the active class to the current clicked button
for (var i = 0; i< nav.length; i++) {
	nav[i].addEventListener("click",function() {
		var current = document.getElementNyClassName("active");
		current[0].className = current[0].className.replace("active","");
		this.className += "active";
	});
	
}