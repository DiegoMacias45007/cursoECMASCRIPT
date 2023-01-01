const string = 'Hello';
//Por medio de string padding podemos editar el contenido del string sin necesidad 
//de cambiar el string por completo

//Si utilizamos .padStart(maxLength, string), la adicion se pone al inicio del string
//el valor maxLength toma como referencia cuantos caracteres debe medir el string nuevo

console.log(string.padStart(7, 'hi'));


//Si utilizamos .padEnd(maxLength, string), la adicion se pone al final del string
//el valor maxLength toma como referencia cuantos caracteres debe medir el string nuevo

console.log(string.padEnd(10, 'World'));

//Si por alguna razon la adicion es mas corta que la cantidad de caracteres especificados en maxLength,
//la adicion vuelve a empezar y se vuelve un loop hasta llenar maxLength:

console.log(string.padStart(40, 'hi'));