//Match all es un metodo que trabaja con los REGEX(ya haras el curso, tu puedes yeyi) que sirve con strings
//Este devuelve una iterable con todas las coincidencias del string especifico en el REGEX
//El cual se coloca como argumento
//CON REGEX PODEMOS VALIDAR SI UNA CONTRASEÑA CUMPLE CON LOS REQUISITOS, O VALIDAR QUE SI TENGAMOS UN
//CORREO ELECTRONICO VALIDO

const regex = /\b(Apple)+|b/g;
const fruit = 'Apple, Banana, Kiwi, Peach, Mango, Strawberry, etc. etc';

const array = [...fruit.matchAll(regex)];
console.log(array);

for (const match of fruit.matchAll(regex)){
    console.log(match);
}