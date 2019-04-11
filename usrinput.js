//Function to receive input from the user

function getInput(usrFunc,a,b,isFunction) {
	
	//Function value
	this.usrFunc = usrFunc;
	
	//'a' bound value
	this.a = a;
	
	//'b' bound value
	this.b = b;
	
	//Tells whether the user function is an actual mathematical function
	this.isFunction = isFunction;
	var usrInputFunc = prompt("Enter a function:", " ");
		
		//What happens if the user leaves the input form blank
		if (usrInputFunc == null || usrInputFunc == " ") {
			this.isFunction = false;
			document.getElementById("log").innerHTML = "Houston, we have a problem. Something's not right. Please make sure that you are entering in mathematical functions and numerical values for the bounds.";
		} 

		//Assigns a new public variable to the usrInputFunc that can be used outside of this file
		else {
			this.usrFunc = usrInputFunc;
			this.isFunction = true;
		}

	//Gathers user input for the 'a' bound and checks to make sure that it is an actual number
	var usrInputBound1 = prompt("Enter the 'a' bound value:", " ");
	if (isNaN(usrInputBound1)) {
		alert("Houston, we have a problem. Something's not right. Please make sure that you are entering in mathematical functions and numerical values for the bounds.");
		return false;
	} else {
		this.a = Number(usrInputBound1);
	}

	//Gathers user input for the 'b' bound and checks to make sure that it is an actual number
	var usrInputBound2 = prompt("Enter the 'b' bound value:", " ");
	if (isNaN(usrInputBound2)) {
		alert("Houston, we have a problem. Something's not right. Please make sure that you are entering in mathematical functions and numerical values for the bounds.");
		return false;
	} else {
		this.b = Number(usrInputBound2);
	}
		//Returns all of the User Input/Program Data in the form of an array that can be accessed outside of the usrinput.js
		return [this.usrFunc,this.a,this.b,this.isFunction];

}