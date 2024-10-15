const math = require('mathjs');

let x = [0,20000,40000,60000,80000];//linear [0,80000];  quadtatic : [0,40000,80000];  polynomail: [0,20000,40000,60000,80000];
let y = [9.81,9.7487,9.6879,9.6879,9.5682];//linear [9.81,9.5682];  quadtatic : [9.81,9.6879,9.5682];  polynomail: [9.81,9.7487,9.6879,9.6879,9.5682];
let z = [];//make array empty
let value = 42000;
let aws = 0;


//     f(x) = (x1-x)/(x1-x0)*f(x0) + (x0-x)/(x0-x1)*f(x1)
for(let i = 0;i<x.length;i++){
    let first = 1;//บรรทัดแรก
    let second = 1;//บรรทัดสอง
    for(let j = 0;j<x.length;j++){
        if(j!=i){
            first *=(x[j]-value);
            second *=(x[j]-x[i]);
        }

    }
    z[i] = first/second;
}

//รวมและหาคำตอบที่ได้
for(let k =0;k<x.length;k++){
    aws +=(z[k]*y[k]);
}


console.log(aws);