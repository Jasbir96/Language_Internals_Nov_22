function modifier(a, b) {
    console.log(a, b)
    a[0] = 10;
    b[1] = 20;
    a=30;
    b=40;

    console.log(a, b)
}

let p = [4, 7, 9];
let q = [3, 6, 8];

console.log(p, q);
modifier(p, q);
console.log(p, q);

// Java, JS , python -> call by values