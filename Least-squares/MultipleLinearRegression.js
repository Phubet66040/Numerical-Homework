const math = require('mathjs');


let x1 = [1, 0, 2, 3,  4,  2,   1];
let x2 = [0, 1, 4, 2,  1,  3,   6];
let x3 = [1, 3, 1, 2,  5,  3,   4];
let y =  [4,-5,-6, 0, -1, -7, -20];

//f(65)

let f = 65;
function multiple_linear_regression(x1,x2,x3,y,fx){
    let A = [
        [x1.length,math.sum(x1),math.sum(x2),math.sum(x3)],
        [math.sum(x1),math.multiply(x1,x1),math.multiply(x1,x2),math.multiply(x1,x3)],
        [math.sum(x2),math.multiply(x1,x2),math.multiply(x2,x2),math.multiply(x2,x3)],
        [math.sum(x3),math.multiply(x1,x3),math.multiply(x2,x3),math.multiply(x3,x3)]
    ]

    let B = [math.sum(y),math.multiply(x1,y),math.multiply(x2,y),math.multiply(x3,y)];
    
    A = math.inv(A); //matrix inverse

    let a = math.multiply(A,B); //multiply matrix A and B
    let prediction = a[0] + a[1]*f + a[2]*f+ a[3]*f;
    return "matrix : ["+a+"] aws :"+prediction;
}

console.log(multiple_linear_regression(x1,x2,x3,y,f));