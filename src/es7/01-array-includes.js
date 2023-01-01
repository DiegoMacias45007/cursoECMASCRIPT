//con includes podemos preguntar si en un array existe la propiedad que necesitemos

const numbers = [1, 2, 4, 6, 7, 9, 10];

//Retorna un booleano que te dice si incluye el valor que queramos

console.log(numbers.includes(8));
console.log(numbers.includes(9));

const list = ['Diego', 'Catherine', 'Gorgo'];

console.log(list.includes('Diego'));

//Lo mismo podemos hacer con los objetos con diferentes metodos:

//Utilizando la palabra reservada in, la cual evalua todas las propiedades del objeto y el prototipo
const letras = { a: 1, b: 2, c: 3};

console.log('a' in letras);
console.log('toString' in letras);

//usando el metodo hasOwnProperty, que evalua solamente las propiedades del objeto

console.log(letras.hasOwnProperty('a'));
console.log(letras.hasOwnProperty('toString'));

//Usando Object.hasOwn(objeto, propiedad)

console.log(Object.hasOwn(letras, 'b'));