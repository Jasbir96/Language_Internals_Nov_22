
// const obj={
//     name:"Steve",
//     age:30,
//     sayHi:function(){
//         // console.log("Hi from "+this.name);
//         console.log("this", this)
//     }
// }
// //  this is determined at runtime -> call a function with an object -> this will be that obj

// // Hi from steve
// obj.sayHi();

// let fnContainer=obj.sayHi;
// //  fn is called
// // fn call -> this is eqaalent to global object
// fnContainer();


// console.log(this);
// const cap = {
//     name: "Steve",
//     sayHi:  () =>{
//         console.log("53", this.name);
//         const iAmInner = () => {
//             console.log("55", this.name);
//         }

//         iAmInner();
//     }
// }

// cap.sayHi();
// arrow fn does not have 
// it's own this it takes this from lexical scope



// 3 rules 
//  a. in GEC this will be -> {}  // window
//  b. in fn call ->  this is equvalent to global object       //window
//  c if fn is called with an object -> this is equvalent to that object  // object

// arrow fn does not have 
// it's own this it takes this from lexical scope


// console.log(this);


// function fn(){
// console.log(this);
// }
// fn();