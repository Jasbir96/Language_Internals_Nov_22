let a={
    p:10,
    q:20
}

let b=Object.create(a);

console.log(b,a);
// console.log(b.p,b.q);
b.p=100;
console.log(b, a);

