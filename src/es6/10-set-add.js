//Set es una nueva estructura de datos para almacenar 'ELEMENTOS UNICOS', o sea no repetidos en lo absoluto
//Creamos el set de la siguiente manera:
const list = new Set();

//Despues podemos agregar datos al set con el metodo .add()

list.add('item1');
//Tambien podemos hacer multiples add
list.add('item2').add('item3');

console.log(list);

//Podemos eliminar ciertos datos del set con el metodo .delete()

list.delete('item2');
console.log(list);

//Con el metodo .has() podemos observar si la lista tiene algun valor y retorna un booleano
console.log(list.has('item1'), list.has('item2'));

//Con el metodo .size podemos observar la cantidad de datos del set

console.log(list.size);

//Con el metodo .clear() podemos limpiar todos los datos del set

list.clear();
console.log(list);