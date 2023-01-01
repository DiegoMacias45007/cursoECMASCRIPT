/*El aplanamiento de arrays consiste en transformar un array de arrays a una sola dimension
Existen dos metodos: flat y flatmap*/

const array = [1, 1, 2, 3, 4, 5, [1, 2, 3, 6, 7, [2, 3, 4,5], 4, 6], 9 ,10];
//Con flat(x), x hace referencia a cuantos niveles de profundidad queremos aplanar el array

console.log(array);
const array2 = array.flat(Infinity);
console.log(array2)
/*Es un metodo inmutable, es decir que retorna un NUEVO array con los valores propagados, sin cambiar
El array original, el valor predeterminado es 1, si se quisieran aplanar todos los niveles de 
profundidad sin excepcion, utilizamos Infinity*/


/*El metodo flatmap es una combinacion de los metodos flat y map, primero realiza la iteracion
de los elementos del array como si fuera un map y despues los aplana en una sola profundidad
es un metodo inmutable que genera un nuevo array
Recibe los mismos argumentos que map
*/

const array3 = [1, 2, 3, 4, 6, 7, 8, 10, 9, 2, 0, 3, 23, 45, 66];

const array4 = array3.flatMap(v => [v, v * 2]);

console.log(array3);
//Aqui me retorna un array donde me flateo el array presentado en la funcion de map
console.log(array4);


