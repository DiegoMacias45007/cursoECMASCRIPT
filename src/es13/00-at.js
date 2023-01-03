//Existen dos tipos de indices en un array:

//?Los indices positivos
/* 
que empizan desde el 0 y terminan en la longitud del array -1
Van de izquierda a derecha
El indice 0 es la posicion 1
[0, 1, 2, 3, 4, 5, ...... , lenght-1]
*/

//?Los indices negativos
/*
Que empiezan desde el -1 hasta el negativo de la longitud total del array
Van de derecha a izquierda
El indice -1 es la ultima posicion
[-length, ...., -4, -3, -2, -1]
*/

//El metodo at permite manejar indices negativos al buscar un dato del array, 
//algo que antes no era posible con los corchetes
//De igual manera sirve tanto con indices negativos como positivos


const names = ['Diego', 'Catherine', 'Gordo', 'Wency', 'Ale', 'Max', 'JuanPi'];

console.log(names[-1]); //undefined
console.log(names.at(-1)); //'JuanPi'
console.log(names.at(3)); //Wency
console.log(names.at(-7)); //Diego 
console.log(names.at(0));//Diego

//Antes para poder utilizar la notacion de corchetes, tenias que utilizar el siguiente metodo:
console.log(names[names.length -1]);