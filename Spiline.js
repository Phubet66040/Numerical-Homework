const math = require('mathjs');

// f1(x) = f(x0)+mi*(x-x0) : mi = f(x2)-f(x1)/(x2-x1);
//x0 <= x >= x1;
//let y = f(x)

let x = [2,4,6,8,10];
let y = [9.5,8.0,10.5,39.5,72.5];//let y = f(x)
let z = 4.5;
let m = [];//make array empty


for(let i =0;i<x.length;i++){
    m.push((y[i+1]-y[i])/(x[i+1]-x[i]));//mi = f(x2)-f(x1)/(x2-x1);
    console.log(m);
}


for(let j = 0;j < x.length;j++){
    if(z >= x[j] && z <= x[j+1]){//x0 <= x >= x1;
        let aws = y[j]+(m[j]*(z-x[j]));// f1(x) = f(x0)+mi*(x-x0)
        console.log(aws);
        
    }
}
