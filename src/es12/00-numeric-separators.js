//Los numeric separators se introducen meramente para que la legibilidad de numeros grandes sea mas clara
//Aqui podemos observar el numero 32 mil millones 345 millones 678 mil 910, pero es dificil de leer
const largeNumber = 32345678910;
//Aqui es mucho mas facil de leer y entender agregando los numeric separators '_'
const legibleNumber = 32_345_678_910;

//Y esto no afecta el codigo en lo absoluto:

console.log(largeNumber);
console.log(legibleNumber); 

//Es el mismo numero pero mas legible para el developer