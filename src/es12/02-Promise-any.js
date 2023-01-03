/*
Promise any es otra forma de trabajar con diversas funciones, sin embargo esta presenta como
response la PRIMERA promesa que se cumpla, ignorando el resultado de todas las demas
Si todas las promesas fallan, el any rebota

Recibe como argumento un array de promesas
*/

const promesa1 = Promise.resolve("Promesa 1")
const promesa2 = Promise.reject("Ups promesa 2 falló")
const promesa3 = Promise.resolve("Promesa 3")

Promise.any([promesa1, promesa2, promesa3])
    .then(response => console.log(response))
    .catch(error => console.log(error)); //Promesa 3


    Promise.any([promesa1, promesa2])
    .then(response => console.log(response))
    .catch(error => console.log(error));
/*
[AggregateError: All promises were rejected] {
    [errors]: [ 'Ups promesa 1 falló', 'Ups promesa 2 falló' ]
}
*/