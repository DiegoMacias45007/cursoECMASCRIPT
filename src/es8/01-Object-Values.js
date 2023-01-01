//La propiedad object.Values nos entrega un array de un objeto, cuyos valores son los values de las
//propiedades del objeto:

const usuario = {
    name: 'Diego',
    age: 20,
    country: 'MX',
    id: 1,
    username: 'ColeTrain45007',
};

const user = Object.values(usuario);

console.log(user);

//Como podemos ver, solamente nos devolvio un unico array, en el cual cada valor esta compuesto
//del value de cada propiedad del objeto