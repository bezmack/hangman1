

var car=["TOYOTA", "HONDA", "BMW", "MERCEDES", "NISSAN"];
var computerPick = car[Math.floor(Math.random() * car.length)];
var splitCar = computerPick.split("");
var currentWord = new Array (splitCar.length);
for (var i=0; i<currentWord.length; i++) {
	currentWord[i] = "_ ";
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	var processWord = userGuess.toUpperCase();
	for (var i = 0; i < splitCar.length; i++) {
		if (splitCar[i] === processWord) {
			currentWord[i] = splitCar[i];
			console.log(currentWord);
			var cword = document.getElementById ("cword");
			cword.innerHTML = "";
			for (var j = 0; j < currentWord.length; j++) {
				cword = document.getElementById("cword");
				var cwordUpdate = document.createTextNode(currentWord[j]);
				cword.appendChild(cwordUpdate);
			}
		}
	}
};

