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
console.log(username, user.age); //Es exactamente lo mismo pero permite que sea mas limpio 
                                //y corto el codigo

//Spread operator
//Sirve para propagar los elementos de una iterable
let person = {
    name: 'Diego',
    age: 20
};

let country = 'MX';
//Permite tambien unir elementos, al agregar los ... se destructura el elemento
let data = { ...person, country};
console.log(data); //Esto me entrega un objeto nuevo donde se destructuro person y se agrego country

//Asigna lo que se encuentra en el objeto a una nueva variable
data = {id:2, ...person, country};
/*Esto seria igual a esto: 
data = {id:2, person.name, person.age, country};*/

console.log(data);
//Un spread operator tambien puede ser utilizado para copiar arrays sin arriesgar el que si cambia uno, cambie el otro:
let array = [1, 2, 3, 4, 5];
let copyArray = [...array];
console.log(array);
console.log(copyArray);

array.push(34);
console.log(array, copyArray);
copyArray.push(90);
console.log(array, copyArray);

//Rest 
//El parametro rest consiste en agrupar el residuo de argumentos de una funcion en un array
//Debe SIEMPRE ESTAR AL FINAL DE LOS PARAMETROS
function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)