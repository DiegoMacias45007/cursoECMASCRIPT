//Un problema que existia antes de ES11 era querer trabajar con varias promesas y obtener sus resultados
//Es por ello que se establecio el Promise.all() y el Promise.allSettled()
//Estos toman como parametros un array de Promesas.

//!Promise.all()
//Esta sirve para manejar multiples promesas al mismo tiempo, sin embargo, si una de estas falla,
//la Promesa es rechazada, solamente se resuelve si TODAS las promesas se resolvieron.
//Tenemos que poner tanto un .then como un .catch

const promise1 = Promise.resolve('Promesa 1');
const promise2 = Promise.resolve('Promesa 2');
const promise3 = Promise.resolve('Promesa 3');
const promise4 = Promise.reject('Ups, promsesa 4 fallo');
const promise5 = Promise.resolve('Promsea 5');
const promise6 = Promise.reject('Ups, premsa 6 fallo');

Promise.all([promise1, promise2, promise2])
    .then(response => console.log(response))
    .catch(error => console.log(error));
    //Presenta en la terminal un array con la respuesta de todas las promesas

Promise.all([promise1, promise2, promise3, promise4, promise5, promise6])
    .then(response => console.log(response))
    .catch(error => console.log(error));
    //Esta inmediatamente lanza el error de la primera promesa que falle y no continua resolviendo

//!Promise.allSettled()
//Es aqui donde allSettled entra en furor, esta retorna si o si un resultado, el cual es
//Un array cuyos valores son objetos englobando cada promesa que se presenta en el metodo, 
//entregando su estatus(si es fulfilled, te da un value, si es rejected, te da una razon)
//No necesita un catch

Promise.allSettled([promise1, promise2, promise3, promise4, promise5, promise6])
    .then(respone => console.log(respone));
/*
  [ { status: 'fulfilled', value: 'Promesa 1' },
    { status: 'fulfilled', value: 'Promesa 2' },
    { status: 'fulfilled', value: 'Promesa 3' },
    { status: 'rejected', reason: 'Ups, promsesa 4 fallo' },
    { status: 'fulfilled', value: 'Promsea 5' },
    { status: 'rejected', reason: 'Ups, premsa 6 fallo' } ] 
*/

//?Dato curioso, no necesitas de afuerzas poner como parametros de una promesa resolve y reject

const holi = () => {
    return new Promise((yeyi, catherine) =>{
    (false) 
    ? setTimeout(() => yeyi('Te casas conmigo catherine?'), 2000) 
    : catherine('Por supuesto que si');
})
}

holi()
    .then(response => console.log(response))
    .catch(error => console.log(error));