//Ahora se puede convertir un array de arrays a un objeto con Object.fromEntries

const entries = new Map([
    ['name', 'Diego'],
    ['age', 20],
    ['country', 'MX']
])

console.log(entries);
//Aqui me convierte el array en un objeto.
console.log(Object.fromEntries(entries));

//Lo mismo podemos hacer con un array normal, no con un Map

const entries2 = [
    ['name', 'Catherine'],
    ['age', 19],
    ['country', 'MX']
];

console.log(entries2);

console.log(Object.fromEntries(entries2));