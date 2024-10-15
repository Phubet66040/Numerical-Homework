const math = require('mathjs');

let x = -2.5;
let h = 0.1;

let func = (x) => {
    return math.pow(Math.E, x / 3) + math.pow(x, 2);
}

let dif = (x) => {
    return (3 * func(x) - 4 * func(x - h) + func(x - h * 2)) / (2 * h);
}

let diff = (x) => {
    return (2 * func(x) - 5 * func(x - h) + 4 * func(x - h * 2) - func(x - h * 3)) / math.pow(h, 2);
}

let difff = (x) => {
    return (5 * func(x) - 18 * func(x - h) + 24 * func(x - h * 2) - 14 * func(x - h * 3) - func(x - h * 4)) / (2 * math.pow(h, 3));
}

let diffff = (x) => {
    return (3 * func(x) - 14 * func(x - h) + 26 * func(x - h * 2) - 24 * func(x - h * 3) + 11 * func(x - h * 4) - 2 * func(x - h * 5)) / math.pow(h, 4);
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