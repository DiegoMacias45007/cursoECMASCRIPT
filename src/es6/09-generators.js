/*Un generator es una funcion especial que puede pausar su ejecución, luego volver 
al punto donde se quedaron, recordando su scope y seguir retornando valores
*/

//Para crear un generator se utiliza function* functionName(parametro)

function* iterate(arr) {
    //Aqui presentamos una logica que podemos usar.
    /*Ejemplo, usaremos el for i of array (el cual hace el ciclo por cada elemento dentro del array, 
    asignando i como el elemento del array)*/
    for (let element of arr){
        //Se requiere una palabra reservada llamada 'yield', la cual nos retorna un valor cada vez que se invoque la funcion
        yield element;
    }
};

//Despues de crear el generator, tenemos que crear una variable que tenga como valor el generator, y el argumento

const it = iterate(['Diego', 'Catherine', 'Rene', 'Wency', 'Yeyi']);

//Ahora el generator recordará en qué variable se quedó
/*Para llamar el elemento que sigue se utiliza el metodo next(), el cual devuelve un objeto que contiene una 
propiedad 'VALUE' que esta definida con el valor de yield, y otra propiedad de 'DONE' que contiene true o false
TRUE sucede cuando ya retornó todos sus valores
FALSE sucede cuando aún no retorna todos sus valores
*/

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value, it.next().done); 
//Cuando se acaban los valores del array, retorna undefined y un done con valor de true
