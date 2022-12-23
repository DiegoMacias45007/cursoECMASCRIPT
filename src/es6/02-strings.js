//Los template literals nos ayuda a concatenar strings

let hello = 'Hello';
let world = 'World';

//antes de ES6
let epicPhrase= hello + ' ' + world + '!'

//Esto es algo poco amigable para strings largos

//Para template literals:

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Tambien se agrego la multilinea en el string:

let lorem = 'esto es un string \n' +  'esta es otra linea';

//Gracias a ES6 y los template literals, solo aregas enter y es otra linea

let lorem2 = `Esta es una frase epica
Y esta es la segunda linea`

console.log(lorem);
console.log(lorem2);