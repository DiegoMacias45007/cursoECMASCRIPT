//Antes era obligatorio utilizar el parametro error en catch

try {
    hello();
} catch(error){
    console.log(error);
}
//Ahora es opcional y podemos presentar un mensaje de error personalizado
try{
    anotherFn();
} catch{
    console.log('Surgio un error')
}

