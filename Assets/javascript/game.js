

var car=["TOYOTA", "HONDA", "BMW", "MERCEDES", "NISSAN"];
var computerPick = car[Math.floor(Math.random() * car.length)];
console.log (computerPick);
var splitCar = computerPick.split("");
console.log (splitCar);
var currentWord = new Array (splitCar.length);

document.onkeyup = function(event) {
	var userGuess = event.key;
	var processWord = userGuess.toUpperCase();
	for (i=0; i<splitCar.length; i++) {
		if (splitCar[i] === processWord) {
			currentWord[i] = splitCar[i];
			console.log(currentWord);
		}
	}
};