const operators = document.getElementsByClassName("operators");
const numbers = document.getElementsByClassName("numbers");
const igual = document.getElementById("iqual");
const borrar = document.getElementById("clear");
const input = document.getElementById("inputNumber");

let operatorsCollection = [];
let numbersCollection = [];
let acumulador = 0;
let operator;
//Si resetInput recibe true, solo se borra la pantalla del input,
//y si no, se resetea tanto la pantalla como el array de numbersCollection.
function resetInput(param) {
  if (param) {
    input.value = null;
  } else {
    input.value = 0;
    numbersCollection = [];
  }
}


//Si la cantidad de elementos es mayor a 0, se define el operador por el valor del botón
//se borra el input y acumulador es el resultado de concatenar el array de numeros.
function tomarOperador() {
 if(numbersCollection.length > 0){
	operator = this.value;
	resetInput(true);
	acumulador= numbersCollection.join('')
	console.log(acumulador);
 }
 else{
	resetInput(false);
 }
}


//Sube el número a un array, y resetea la pantalla para que no quede un 0
//en el input, y por cada número del array de numbers, los va colocando en el input.
function tomarNumero() {
  numbersCollection.push(this.value);
  resetInput(true);
  for (let i = 0; i < numbersCollection.length; i++) {
    input.value += numbersCollection[i];
  }
}

//En proceso
function iqual() {}


//Si el valor del input es distinto de 0, se llama a resetInput con false
//reseteando tanto la pantalla como el array.
function clearDigit() {
  resetInput(false)
}

//Se agrega la función tomarOperador a cada botón con clase operators
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", tomarOperador);
}

//Se agrega la función tomarNumero a cada botón con clase number 
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", tomarNumero);
}
igual.addEventListener("click", iqual);
borrar.addEventListener("click", clearDigit);
