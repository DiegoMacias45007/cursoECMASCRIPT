//El metodo replaceAll() me retorna un nuevo string reemplazando los valores que yo le especifique
/**
 *  
    Dicho metodo recibe dos argumentos:
    //?El metodo a reemplazar: puede ser un string o un regex
    //?El nuevo elemento que sustituye
    Antes de ES12, existia el metodo replace, que solamente reemplazaba la primer instancia del string
*/

const mensaje = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.'

console.log(mensaje.replace('JavaScript', 'Python'));
//Python es maravilloso, con JavaScript puedo crear el futuro de la web.

console.log(mensaje.replaceAll('JavaScript', 'Python'));
//Python es maravilloso, con Python puedo crear el futuro de la web.

//Con regex:

console.log(mensaje.replaceAll(/a/g, '*'));
//J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.