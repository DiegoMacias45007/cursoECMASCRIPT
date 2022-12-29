// enhanced object literals

//Como se hacia antes:

function newUser(user, age, country){
    return {
        user: user,
        age: age,
        country: country,
    };
}

console.log(newUser('Diego', 20, 'MX'));
//Ahora se puede hacer sin necesidad de repetir

function newAdmin(user, age, country, uID){
    return{
        user,
        age,
        country,
        id: uID
        //Si quisieramos agregar otro valor, podemos usar la logica de id: uId y no pasa nada
    }
}

console.log(newAdmin('Diego', 20, 'MX', 2));