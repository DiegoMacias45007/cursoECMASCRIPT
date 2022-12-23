function square(num){
    return num*num;
}

const squareNumber = (num) =>{
    return num * num;
}

const squareNum = num => num * num;

console.log(square(25));
console.log(squareNumber(25));
console.log(squareNum(25));
//Con las arrow functions el return esta implicito, y cuando es un unico valor, no es necesario
//un parentesis
//Tambien podemos eliminar las llaves para encapsular el codigo si es un codigo simple