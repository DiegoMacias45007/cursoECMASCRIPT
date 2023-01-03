//Como llamar una API:
/*
Primero instalo node-fetch : npm install node-fetch
Luego utilizo import fetch from 'node-fetch'
Despues creo una constante llamada response y que tenga el valor de
await fetch('URL API')
*/
//Top Level Await permite utilizar await sin necesidad de estar en una async function
//Como su nombre lo dice, solamente puede estar si esta hasta la parte de arriba del modulo
import fetch from 'node-fetch';

const response = await fetch('https://fakestoreapi.com/products/');

//Ahora podemos convertir esta respuesta en un objeto json:

const products = await response.json();

//Luego hago export de los products

export { products };

