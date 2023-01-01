//Las expresiones regulares, o REGEX son patrones de busqueda y manipulacion de cadenas de caracteres

const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matcher = regex.exec('2023-01-01');
//con table nos da una tablita en la consola
console.table(matcher);