const math = require('mathjs');

let x = -2.5;
let h = 0.1;

let func = (x) => {
    return math.pow(Math.E, x / 3) + math.pow(x, 2);
}

let dif = (x) => {
    return (-1 * func(x + h * 2) + 8 * func(x + h) - 8 * func(x - h) + func(x - h * 2)) / (12 * h);
}

let diff = (x) => {
    return (-1 * func(x + h * 2) + 16 * func(x + h) - 30 * func(x) + 16 * func(x - h) - func(x - h * 2)) / (12 * math.pow(h, 2));
}

let difff = (x) => {
    return (-1 * func(x + h * 3) + 8 * func(x + h * 2) - 13 * func(x + h) + 13 * func(x - h) - 8 * func(x - h * 2) + func(x - h * 3)) / (8 * math.pow(h, 3));
}

let diffff = (x) => {
    return (-1 * func(x + h * 3) + 12 * func(x + h * 2) - 39 * func(x + h) + 56 * func(x) - 39 * func(x - h) + 12 * func(x - h * 2) - func(x - h * 3)) / (6 * math.pow(h, 4));
}


let s1 = math.derivative('exp(x)', 'x').evaluate({ x: x });
let s2 = math.derivative(('exp(x)', 'x'),'x').evaluate({ x: x });
let s3 = math.derivative((('exp(x)', 'x'),'x'),'x').evaluate({ x: x });
let s4 = math.derivative(((('exp(x)', 'x'),'x'),'x'),'x').evaluate({ x: x });


let es1 = math.abs((dif(x) - s1) / dif(x)) * 100 / 100;
let es2 = math.abs((diff(x) - s2) / dif(x)) * 100 / 100;
let es3 = math.abs((difff(x) - s3) / dif(x)) * 100 / 100;
let es4 = math.abs((diffff(x) - s4) / dif(x)) * 100 / 100;

console.log("error : "+es1);
console.log("diff1 : "+dif(x)+"\n");
console.log("error : "+es2);
console.log("diff2 : "+diff(x)+"\n");
console.log("error : "+es3);
console.log("diff3 : "+difff(x)+"\n");
console.log("error : "+es4);
console.log("diff4 : "+diffff(x)+"\n");