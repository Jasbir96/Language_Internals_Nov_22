var varName = 10;
// fn definition -> outside scope
function b() {
    // is not present here 
    console.log(varName);
}
function fn() {
    var varName = 20;
    // fn ivocation
    
    b();
    console.log(varName);
}

fn();