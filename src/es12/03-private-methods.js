//En es12 se introdujeron los metodos privados, los cuales limitan el acceso a propiedades y metodos
//Al agregar el caracter '#'


class usEr{
    //constructor
    constructor(name = 'Diego', age = 20, country = 'MX'){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //metodos
    #speak(){ //Ahora solo se puede acceder dentro de la misma clase
        return 'Hello!'
    }
    greeting(){
        return `${this.speak()} My name is ${this.name}, I am from ${this.country} and I'm ${this. age} 
        years old!`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(newAge){
        this.age = newAge;
    }
}

//Este se usa principalmente para evitar el mal uso de los datos o propiedades de las clases