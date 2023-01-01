//Async y await fue la forma final de resolver el asincronismo de javascript


const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        //Existe una nueva forma de ejectura un if / else: el if ternario

        (true)
        ? setTimeout(() => resolve('Async!!'), 2000) //Esto sucede si se cumple el true
        : reject(new Error('Error')); //Esto sucede si no se cumple el true
    });
};


//Ahora trabajaremos con async y await, agregamos la palabra reservada async antes de los parametros para
//Diferenciarla a una async function

const anotherFunction = async() =>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFunction();
console.log('after')