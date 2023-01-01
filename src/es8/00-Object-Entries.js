/*Object entries devuelve un array a partir de un objeto.
Este metodo devuelve un array con los 'entries' en forma [propiedad, valor]
del objeto enviado como argumento
 */

const countries = {
    MX: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
};

const countryArray = Object.entries(countries);

console.log(countryArray);
//Como podemos ver, transforma el objeto en un array con subarrays donde se engloba cada propiedad
//Con su valor

