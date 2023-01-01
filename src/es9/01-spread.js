//En es9 nos permite usar rest y spread con objetos, no solamente dentro de arrays:

const user = {
    name: 'Diego',
    age: 20,
    country: 'MX',
}

const { name, ...values } = user; 

console.log(name);
console.log(values);