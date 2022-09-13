const operators = document.getElementsByClassName("operators");
const numbers = document.getElementsByClassName("numbers")
const igual = document.getElementById("iqual")
const borrar = document.getElementById("clear")

let operatorsCollection = [];
let numbersCollection = []
function tomarOperador(){
	console.log(this.value)
}
function tomarNumero(){
	console.log(this.value)
}
function iqual(){
console.log("Terminaste la operación")
}
function clearDigit() {
	console.log("Borraste un dígito")
}
for(let i = 0; i < operators.length; i++){
	operators[i].addEventListener('click', tomarOperador);
}
for(let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', tomarNumero);
}
igual.addEventListener('click', iqual);
borrar.addEventListener('click', clearDigit);
