const fs=require("fs");
console.log("Before");
// callbacks
// fs.readFile("f1.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
        // console.log("content "+data);
//     }
// })

// const promise=fs.promises.readFile("f1.txt");

// // console.log(promise);

// promise.then((data)=>{
//     console.log("then" + data);
// }).catch((err)=>{
//     console.log("err",err);
// })

// console.log("After");

// while(true){

// }
// setTimeout(()=>{
//     console.log(promise)
// },1000);





// async await 

 const promise=fs.promises.readFile("f1.txt");

// // console.log(promise);

// promise.then((data)=>{
//     console.log("then" + data);
// }).catch((err)=>{
//     console.log("err",err);
// })
// try catch
async function fn(){
try{
    const data =await promise;
    console.log("data"+data);
}catch(err){
    console.log("err",err);
}
}
fn();

