angular.module('myapp')

  .service('aboutService', function () {



	var today = new Date();
var day = today.getDay();
var time = today.getHours();
var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
var date = today.getDate();
var hour = today.getHours();
var min = today.getMinutes()+"min";
var sec = today.getSeconds()+"sec";
var month = today.getMonth();
var year = today.getFullYear();

if (hour > 20) {

	hour = today.getHours() + "PM"
}
else {
	hour = today.getHours() + "AM"
}



console.log("Today is :", days[day] + 
	"The Month is :", month +
	"The date is :", date +
	"The year is :", year 
	);
this.dd = function(){

	var x = days[day];
	return x;
}
this.mm = function(){

	var y = month;
	return y;
}
this.dt = function(){

	var z = date;
	return z;
}


this.generate = function(){

	var numbers = "sandi";
	return numbers;
// var oddNums = numbers;
console.log(numbers);

};

this.rev = function (){

	var x = "santo";
	var y = x.split("");
	// var z = y.reverse();
	// var a = z.join("");
	
	return y;
}



});








