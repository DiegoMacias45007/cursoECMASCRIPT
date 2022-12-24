/*Arrays destructuring 
Destructurar nos ayuda a obtener los elementos de un array y un objeto en un valor
*/
let fruits = ['apple', 'banana'];

let [a, b] = fruits;
console.log(a, b);

console.log(a, fruits[1]); //'apple', 'banana'

//Se pueden saltar lugares del array con comas

let [,fruit] = fruits;
console.log(fruit); /*Arroja banana */

//Object destructuring
/*Implica extraer las propiedades de un objeto en una variable */

let user = {
    username: 'Diego',
    age: 20
};

let {username, age } = user;
console.log(username, age); //'Diego', 20
console.log(username, user.age); //Es exactamente lo mismo pero permite que sea mas limpio y corto el codigo

//Spread operator
//Sirve para propagar los elementos de una iterable
let person = {
    name: 'Diego',
    age: 20
};

let country = 'MX';

let data = {id: 1 , ...person, country};
console.log(data);


//Rest 