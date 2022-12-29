/*Las clases son plantillas para crear objetos JSON con sus mismos atributos y metodos
(atributos son las variables y metodos las funciones), basicamente como un molde de galletas, todas
tendran la misma forma pero su composicion, sabor, textura es diferente.
*/

//Declarando la clase:
class User{
}

//Cramos una instancia (la cual es un nuevo objeto de la clase):
//    const newUser = new User();

/*Aqui podemos empezar a agregar metodos, los cuales son funciones que tendran las clases y estas podran
ser llamadas utilizando instancia.metodo()
*/

class user{
    //Aqui declaramos los metodos, que son funciones sin necesidad de utilizar function
    greeting(){
        return 'Hello!';
    }
};

//Al crear la instancia, podemos llamar el metodo implicito:

const yeyi = new user();

console.log(yeyi.greeting());

const catein = new user();
console.log(catein.greeting());

/*el constructor es basicamente la funcion que se va a inicializar en el momento en el que se crea una
nueva clase con la palabra NEW. Se ejecuta al poner NEW class. Usualmente se utiliza para asignar los
atributos del objeto
*/
class useR {
    //creando el constructor
    constructor(){
        console.log('New User');
    }
    greeting(){
        return 'Hello!';
    }
}

const diego = new useR(); 
console.log(diego.greeting());


/*This en pocas palabras es una forma de diferenciar el atributo del padre y del hijo, o sea
Diferenciamos mediante this.atributo que el atributo que le asignaremos al hijo sera igual al valor que
le demos
*/ 


class uSer {
    //En los constructors tambien podemos usar default values
    constructor(name = 'Diego', age = 20, country = 'MX'){
        this.name = name; 
        /*aqui estamos diciendo que al hijo le asignaremos un atributo de name, 
        cuyo valor sera el que mandemos como argumento
        */
        this.age = age;
        this.country = country;
    }
    //Agregamos metodos
    speak(){
        return 'Hello!'
    }

    greeting(){
        //En las clases podemos hacer referencia de metodos pasados para usar en metodos nuevos
        return `${this.speak()} My name is ${this.name}, I am from ${this.country} and I'm ${this. age} 
        years old!`;
    }
}
/*Aqui podemos observar que al decir que es una nueva clase, pasamos argumentos y se crea un objeto
con dichos atributos, y cuenta con diferentes funciones que pueden ser llamadas gracias a los metodos
*/
const catherine = new uSer('Catherine', 19, 'MX');
console.log(catherine);
console.log(catherine.speak());
console.log(catherine.greeting());

const dieguito = new uSer();
console.log(dieguito);
console.log(dieguito.speak());
console.log(dieguito.greeting());

/*Los metodos get y set nos permiten tener acceso a leer o modificar un atributo del objeto
 */


class usEr{
    //constructor
    constructor(name = 'Diego', age = 20, country = 'MX'){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //metodos
    speak(){
        return 'Hello!'
    }
    greeting(){
        return `${this.speak()} My name is ${this.name}, I am from ${this.country} and I'm ${this. age} 
        years old!`;
    }
    get uAge(){
        return this.age; //Aqui le estamos diciendo al objeto que nos presente la edad que tiene
    }
    //Pueden tener el mismo nombre, la unica forma de diferenciarlos es agregando el simbolo de '='
    set uAge(newAge){
        this.age = newAge; //Aqui estamos diciendo que si ponemos instancia.uAge = valor; 
        //Cambiara la edad que tiene
    }
}

const geirorei = new usEr('Catherine', 19, 'MX');

console.log(geirorei.speak());
console.log(geirorei.greeting());
console.log(geirorei.uAge); //Aqui nos retorna que el valor del atributo age es 19
geirorei.uAge = 20; //Aqui estamos cambiando el valor de age
console.log(geirorei.uAge); //Aqui nos retorna que el valor del atributo age es 20
console.log(geirorei.age); //Aqui podemos verificar que el valor del atributo age es 20