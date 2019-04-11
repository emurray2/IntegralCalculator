
//Creates a new instance of the usrinput.js file and calls the getInput function to get input from the user

var usrInput = new getInput();

//Turn the User Input of the Function into mathematical code
var f1 = function(x) {
	try {
		return eval(usrInput[0]);
	} catch (e) {
		document.getElementById("log").innerHTML = "Houston, we have a problem. Something's not right. Please make sure that you are entering in mathematical functions and numerical values for the bounds.";
	}
}

//Evaluate the integral
var integral = function(f,a,b) {
	var area = 0;
	var dx = 0.000001;
	for(let x = a;x < b;x += dx){
		area += dx*f(x);
	}
	//Return the value of the area when done
	return area;
}

//Log's integral value into console for debugging
console.log(integral(f1,usrInput[1],usrInput[2]));

//Check if the integral is NaN (not able to be converted to numbers because the user inputted stuff other than numbers)
if (isNaN(integral(f1,usrInput[1],usrInput[2]))) {
	document.getElementById("log").innerHTML = "Houston, we have a problem. Something's not right. Please make sure that you are entering in mathematical functions and numerical values for the bounds.";
} 

//Prints the value of the Integral on the screen with User Specified Parameters from Input
else {
	document.getElementById("log").innerHTML = "Your Integral Is: " + integral(f1,usrInput[1],usrInput[2]);
}