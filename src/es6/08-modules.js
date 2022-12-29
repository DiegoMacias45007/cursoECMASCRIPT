/*Gracias a los modulos ahora tenemos la posibilidad de trabajar con diferentes archivos de js
Esto se puede aplicar con las palabras reservadas export e import
*/

/*Cuando querramos importar un valor, utilizamos la palabra import {nombre funcion a importar} from
'ruta del archivo a importar'
*/
//Sin embargo, cuando vamos a importar solo UN VALOR, no se deben de utilizar las llaves
import hello from './module.js';

console.log(hello());

//Con las llaves podemos importar multiples funciones
import {suma, resta} from './module.js';


console.log(suma(2, 8));

/*De igual manera, puedo importar TOOOODAS las funciones de un modulo con el simbolo * y asignarla
Como una variable con las palabra reservada 'as'
a la cual puedes llamar las funciones con NOMBREVARIABLE.funcion;
*/

import * as myModule from './module.js';

console.log(myModule.add(2,3));

console.log(myModule.resta(90, 43));