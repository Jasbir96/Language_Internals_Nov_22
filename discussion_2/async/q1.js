// let a = true;
// console.log("Before");
// // minimum waiting 
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");
// // infinite loop
// while (a) {
// }


// multiple 
// setTimeout(,1000);
// setTimeout(,1000);

// is js muti-threaded -> no
//  then how it can do multiple task at once -> beacuse of async architecture of the enviornment


console.log("Before");
// 1sec
setTimeout(() => { 
    console.log("set timeout 1");
    while (1) {
     } 
    }, 1000)

// 2sec
setTimeout(() => console.log("hello"), 2000)

console.log("After");