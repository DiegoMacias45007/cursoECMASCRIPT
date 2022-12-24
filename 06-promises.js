//LAs promesas fueron el inicio del asincronismo de JS
//Una promesa es algo que va pasar en algun momento, o nunca
//Dentro de la promise hay una funcion anonima con dos valores, resolve (Se logra) y reject (No se logra)


const anotherFunction = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('We did it!'); //Si se resuelve, lanza esto como el argumento de resolve
        } else{
            reject('Oh no!'); //Si no se resuelve, lanza esto como el argumento de reject
        }
    })
}

anotherFunction()
    .then(response => console.log(response))//Then es un metodo de la promesa que retorna anotherFunction()
    .catch(err => console.log(err));//Si no se resuelve de manera exitosa la promesa, esto sucede
//El ; se pone hasta el final del catch, si no, da error, pueden haber multiples Then



//Ejemplos practicos:

const datos = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008
    },{
        id: 2,
        title: 'Spiderman-Homecoming',
        year: 2017
    },{
        id: 3,
        title: 'Avengers: EndGame',
        year: 2019
    }
];
const getDatos = () =>{
    return datos;
}

console.log(getDatos());
//Esto demuestra que JS es sincrono, por lo tanto, si hubiera un delay sucederia esto:

const getData = () =>{
    setTimeout(() => {
        return datos;
    }, 1500);
}

console.log(getData());
//Para evitarlo:

const getDatosAsync = () =>{
    return new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(datos);
            }, 1500);
            reject('Oh no!');
        })
    }


    getDatosAsync()
        .then(response => console.log(response))
        .catch(err => console.log(err));