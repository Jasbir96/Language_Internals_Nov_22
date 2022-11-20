class PersonCreater{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(this.name +
             " is " + this.age + 
             " years old");
    }

}

const Jasbir=new PersonCreater("Jasbir",26);
console.log("obj", Jasbir);
