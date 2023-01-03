//En Javascript existe un numero maximo y minimo con el que javascript puede trabajar
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
//Fuera de estos limites, las operaciones matematicas pueden fallar y presentar resultados erroneos.

//La forma antigua de demostrar que es un numero grande, se utilizaba la 'n'
const aBigNumber = 92831920183294010129n;

//!Aqui es donde llega BigInt

const anotherBigNumber = BigInt(92831920183294010129);

console.log(aBigNumber);
console.log(anotherBigNumber);