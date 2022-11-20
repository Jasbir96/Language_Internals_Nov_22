// function constructor
function PersonCreater(name,age){
this.name=name;
this.age=age;
this.sayHi=function(){
    console.log("Hi"+ this.name);
}
}

const Jasbir=  new PersonCreater("Jasbir",26);
console.log("obj",Jasbir);
// Jasbir.sayHi();