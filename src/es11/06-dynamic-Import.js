//Cuando se introfujo la importacion de modulos, surgio un problema: todos los modulos se importaban
//Aunque el usuario no los necesitara. Por ello se introduce en ES11 el import(), el cual permite dar
//un dinamismo a las importaciones, es decir, no se importara nada hasta que el usuario lo necesite

const btn = document.querySelector('.try');
const btn2 = document.querySelector('.try2');
//Una funcion anonima es una funcion que no tiene nombre
//El metodo import() utiliza como parametro un string que contiene la ruta del archivo
btn.onclick = async () => {      //Es mas amigable no poner function y solo usar arrow function
    const module = await import('./module.js');
    console.log(module)
    module.hello();
};


//Se puede hacer tambien por medio de promesa

import('./module.js')
    .then(module => module.hello())
    .catch(error => console.log(error));