//linear regression
const math = require('mathjs');


let x = [10,15,20,30,40,50,60,70,80];
let y = [5,9,15,18,22,30,35,38,43]; //f(x) == y

//f(65)

let f = 65;

let n = x.length;//n
let sumx = 0;//Exi
let sumx2 = 0;//E(xi*xi)
let sumy = 0;//Eyi
let sumxy = 0;//E(xi*yi)

//sumation E
for(let i =0;i<n;i++){
    sumx += x[i];
    sumx2 +=math.pow(x[i],2);
    sumy += y[i];
    sumxy += x[i]*y[i];
}

let a0 = [[n,sumx],[sumx,sumx2]];//[n,Exi,Exi,Exi2]
let a1 =  [sumy,sumxy];
console.log(a0,"    :    ",a1);


let aws = [];
for(let i =0;i<a0.length;i++){
    let clone = a0.map(row => [...row]);//..spare info,  row clone all row not change
    for(let j =0;j<a0.length;j++){
        clone[j][i] = a1[j];
    }
    let x = math.det(clone)/math.det(a0);//a0...an
    aws.push(x);

}

console.log(" AWS : ",aws[0]+aws[1]*f);//g(x) = x0 +x1*x

