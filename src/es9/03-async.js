//Es lo mismo que un generador que ya conocemos pero con la sintaxis de promesas y asincronismo
//Para que este sea posible, se debe utilizar la palabra reservada async antes del function*, 
//Y en cada yield agregar la palabra reservada await

async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

//for await es un ciclo repetitivo que se maneja de manera asincrona, siempre debe de estar dentro
//de una async function
async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}


const names = arrayOfNames(['Diego', 'Kate', 'Gordo', 'Yeyi']);
console.log('After');