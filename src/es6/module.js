//En este archivo crearemos todo lo que necesitemos
//primero creamos la funcion o constante u objeto:
const hello = () =>{
    return console.log('Hello!');
}


//Luego utilizamos la palabra export, si solamente UN VALOR sera exportado, se utiliza la expresion
//Export DEFAULT, eliminando la necesidad de usar llaves tanto en export como en import

export default hello;

//Adicionalmente, no podemos utilizar export default antes de const, let o var, tiene que ser al final
/* ❌ Erróneo
export default const add  = (x,y) => {
    return x + y;
}
 */

/* ✅ Correcto
const add  = (x,y) => {
    return x + y;
}

export default add */

//Podemos exportar de dos maneras: antes de declarar la funcionalidad o mediante llaves {}
//Antes de declarar
export const add = (x, y) =>{
    return x + y;
}
//Entre llaves
const suma = (x , y) =>{
    return x + y;
}
const resta = (x, y) =>{
    return x - y;
}

export {suma, resta} //Tambien podemos exportar multiples funciones
