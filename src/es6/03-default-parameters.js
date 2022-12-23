//Antes de ES6

function newUser (name, age, country){
    var name= name || 'Diego';
    var age = age || 20;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();

newUser('Catherine', 19, 'Michoacan');


//Despues de ES6

const addUser = (name = 'Diego', age = 20, country = 'MX') =>{
    console.log(name, age, country);
}

addUser();
addUser('Catherine', 19, 'MX');