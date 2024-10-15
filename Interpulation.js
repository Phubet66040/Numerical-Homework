const math = require('mathjs');

let x = [0,20000,40000,60000,80000];
let y = [9.81,9.7487,9.6879,9.6879,9.5682];

// f(x) = C0+C1(x-x0)+C2(x-x0)(x-x1)+...

//Linear 0:9.81,80000:9.5682 
//C0 = 0 ; C1 = (f(x1)-f(x0))/(x1-x0)

let z = (y[4]-y[0])/(x[4]-x[0]);

console.log(z);