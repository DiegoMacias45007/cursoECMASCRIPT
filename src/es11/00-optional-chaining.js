//En un objeto podemos tener dentro de el otros objetos, cada uno con diferentes atributos

const users = {
    diego: {
        state: 'JAL',
    },
    catherine:{
        state:'MCH',
    },
}
//Podemos acceder a cada uno de estos hijos y sus propiedades por cada '.' que agreguemos al final de la
//propiedad
console.log(users.diego.state);


//Cuando intentas acceder a propiedades de un objeto que no existen, JS instinctivamente te retornara
//undefined, produciendo un error en el programa y colapsando todo tu codigo

const usuario = {};

console.log(usuario.redes); //Como no existe, retorna undefined
/*
!console.log(usuario.redes.facebook); 
*/ //Al intentar esto, el programa colapsa, porque es como
//Si quisieramos leer undefined.facebook, dando error de tipo, debido que undefined es un primitivo.

//Por ello existe el optional chaining '?.', permitiendo dener la evaluacion cuando el valor antes de
//la expresion es undefined o null, evitando asi que colapse el programa


console.log(users.gordo?.age);//Aqui se detuvo la evaluacion porque redes es undefined

//!OJO
//No debemos abusar de ello, solo se debe usar cuando PROBABLEMENTE un valor no exista. 
//Si es un valor que siempre va a existir, no debemos usarlo

