var alledagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];


document.getElementById("text1").innerHTML = alledagen.join(" ") + "<br>";

for (var i = 0; i < 5; i++) {
	document.getElementById("text2").innerHTML += alledagen[i] + (" ");
}

for (var i = 5; i < 7; i++) {
	document.getElementById("text3").innerHTML += alledagen[i] + (" ");
}

for (var i = alledagen.length-1; i > -1; i--) {
	document.getElementById("text4").innerHTML += alledagen[i] + (" ");
}

for (var i = alledagen.length-3; i > -1; i--) {
	document.getElementById("text5").innerHTML += alledagen[i] + (" ");
}

for (var i = alledagen.length-1; i > 4; i--) {
	document.getElementById("text6").innerHTML += alledagen[i] + (" ");
}






