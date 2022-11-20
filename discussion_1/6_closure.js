function createCounter(init , delta=5) {
    
    function count() {

        init = init + delta
        return init
    }
    return count;
}
let c1 = createCounter(10, 5);
// console.log(c1);
// let c2 = createCounter(5, 2);

console.log("c1",c1())
console.log("c1",c1())

// console.log("c2",c2())
// console.log("c2",c2())
// console.log("c1",c1())


// closure -> feature that ensure that variables in outer scope are always available to the a fn
// even if the outer fn is removed from the stack 