function balikKata(kata){
	var huruf = ''
	for (var i= kata.length-1; i>=0 ; i--){

	huruf = huruf + kata [i];
}
return huruf;
}
console.log(balikKata('hello World and Coders'))
console.log (balikKata ('John Doe'))
console.log (balikKata ('I am bookworm'))
console.log (balikKata ('coding is My hobby'))
console.log (balikKata ('super'))