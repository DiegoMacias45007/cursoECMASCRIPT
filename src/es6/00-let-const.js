//Originalmente se utilizaba var para presentar variables
var lastName = 'Macias';

//Declarar una variable:
var lastName;

//Asignar una variable:
lastName='Macias';

//Reasignar una variable:

lastname= 'Diego';
console.log(lastName);

//Con let se puede reasignar

let fruit = 'Fresa';
fruit = 'Kiwi';

//Con const no se puede reasignar un valor

const animal = 'Dog';
// animal = 'cat'; //Lanzaria error

const fruits = () =>{
    if(true){
        var fruit1 = 'apple'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//Las var estan guardadas de forma global (Global scope), 
//let y const solo pueden ser ejecutadas en el bloque de codigo donde se hayan declarado
