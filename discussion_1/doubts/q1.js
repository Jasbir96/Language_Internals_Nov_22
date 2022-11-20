function fn (a, b) {
    var a = 2 //can i do this and will this shadow argument a
console.log(a);
} 
function fn2(a, b) {
    let a = 2 //can i do this and will this shadow argument a
console.log(a);
} 
fn();
fn2();