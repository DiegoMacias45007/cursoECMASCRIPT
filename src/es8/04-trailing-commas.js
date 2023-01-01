//Las trailing commas consiste en comas al final de los objetos o arrays que facilitan añadir
//nuevos elementos evitando problemas de sintaxis

const usuario = {
    name: 'Diego',
    age: 20,
    country: 'MX', //<-- trailing comma
}
console.log(usuario)

//Tambien permite crear espacios vacios en el array para que puedan ser llenados (empty items)

const ages = [10, 20, 30, , 43, 25, , , ,];

console.log(ages, ages.length);