//Con el operador OR '||' podemos asignar a una variable con un valor FALSEY,
//es decir un valor falso en contexto booleano (0, '', null, undefined, false, NaN),
//otro valor predeterminado para evitar errores en codigo.

let anotherNumber = '';

let orValidation = anotherNumber || 'Es falsey';

console.log(orValidation);

//Sin embargo, este metodo puede producir errores si el valor recibido cae en estos falseys 
//y nuestra intencion es mantener ese valor falsey

const id = 0;
const orId = id || 'Sin id';

console.log(orId);

//La solucion para esto es Nullish Coalescing '??', este operador evalua si el valor anterior a este
//es 'null' o 'undefined', de ser el caso, retorna el valor determinado

const nullishId = id ?? 'Sin id';

console.log(nullishId);