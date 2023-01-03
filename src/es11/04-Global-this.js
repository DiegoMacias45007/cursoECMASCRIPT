//Cuando se inicia la compilacion de un proyecto, se crea un objeto global, el cual era diferente para
//cada parte del development (en el navegador es WINDOW, en NodeJS es GLOBAL, en WebWorkers es SELF)
//Al querer trabajar on este objeto global habian errores, por lo que se creo el objeto globalThis

//console.log(window) Me da error, diciendo que window no esta definido
//console.log(self) Tambien me da error pues no esta definido
console.log(global); //Aqui si me lo presenta

console.log(globalThis); //Aqui me permite que se trabaje de cualquier plataforma

console.log(global === globalThis);