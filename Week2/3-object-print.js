let person = {
	name : 'Elias',
	age : 25,
	address : 'Zaandam',
	mobile : 0682404600
}
function printObject(information){
	for(i in information){
		console.log(i + ' : ' +  information[i]);
	}
}
printObject(person);