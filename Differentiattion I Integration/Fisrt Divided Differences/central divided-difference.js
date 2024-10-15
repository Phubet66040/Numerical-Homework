const math = require('mathjs');

let x = 2;
let h = 0.25;

let func = (x)=>{
   return  math.pow(Math.E,x);
}
let dif = (x)=>{
    return (func(x+h)-func(x)) /h;
}
let diff = (x)=>{
    return  (func(x + h*2) - 2*func(x + h) + func(x)) / math.pow(h, 2);
}
let difff =(x)=>{
    return (func(x + h*3) - 3*func(x + h*2) + 
    3*func(x + h) - func(x)) / math.pow(h, 3);
}
let diffff = (x)=>{
    return ( 
        (func( x + h * 4 )- 4 * func(x + h*3)+
        6*func(x+h*2) - 4 * func( x + h ) +
        func(x))/math.pow(h,4)
        );
}

let s1 = math.derivative('exp(x)', 'x').evaluate({ x: x });
let es = math.abs((dif(x) - s1) / dif(x)) * 100 / 100;
console.log("error : "+es+"\n");
console.log("diff1 : "+dif(x));
console.log("diff2 : "+diff(x));
console.log("diff3 : "+difff(x));
console.log("diff4 : "+diffff(x));