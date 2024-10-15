const math = require('mathjs');

let first =  -1;
let last = 2;
let h = (last-first)/2;
let func = (x)=>{
    return math.pow(x,7)+2*math.pow(x,3)-1;
}

let I = (h/3)* (func(first) + 4 * func(first+h) + func(last));// h/3*1f(x0)+4f(x1)+1f(x2)

console.log("is : "+I);