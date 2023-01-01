const anotherFunction = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ?setTimeout(() => resolve('We did it!'), 4000)
            :reject('Oh no!');
    })
}
//Finally nos permite mostrar algo en cuanto se culmine la promesa
anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Se logroooo'));

