function howOldAreYou(dateOfBirth){
	const millisecondsInADay = 86400000;
	var today = new Date();
	var age =  Math.floor((today - dateOfBirth)/millisecondsInADay/365);
	return age;
}
var dateOfBirth = new Date(1989,07,23)
console.log(howOldAreYou(dateOfBirth))
