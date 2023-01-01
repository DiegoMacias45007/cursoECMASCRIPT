//Por ultimo, Object.keys es un metodo que convierte un objeto a un array, cuyos valores son las
//propiedades del objeto

const usuario = {
    name: 'Catherine',
    age: 19,
    country: 'MX',
    id: 2,
    username: 'catheriincruzz562',
};

const userData = Object.keys(usuario);

console.log(userData);
//Como podemos ver, nos retorno un array con las propiedades del objeto