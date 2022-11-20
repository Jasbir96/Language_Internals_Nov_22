// it is a user defined method
Array.prototype.sum=function(){
let sum=0;
for(let i=0;i<this.length;i++){
sum=sum+this[i];
}
console.log("sum is "+sum);
}

let arr=[1,2,3,4];
// this -> arr
arr.sum();

let arr2=[3,4,5];
// this -> arr2
arr2.sum();


// polyfills  -> map ,filter,reduce