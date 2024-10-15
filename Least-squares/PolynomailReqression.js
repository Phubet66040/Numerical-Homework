const math = require('mathjs');

let x = [10,15,20,30,40,50,60,70,80];
let y = [5,9,15,18,22,30,35,38,43]; //f(x) == y

let f = 65;
let n = x.length;
let m = 2;

let a0 = Array(m+1).fill(0).map(()=>Array(m+1).fill(0));
let a1 = Array(m+1).fill(0);
a0[0][0] = n;

for(let i = 1;i<= m+1;i++){

    for(let j =1;j<= i;j++){
        let k = i+j-2;
        let sum = 0;

        for(let l = 0;l<n;l++){
            sum += math.pow(x[l],k);
        }
        a0[i-1][j-1] = sum;
        a0[j-1][i-1] = sum;
    }

    let sum = 0;
    for(let l =0;l<n;l++){
        sum += y[l]* math.pow(x[l],i-1);
    }
    a1[i-1] = sum;

}

let aws = [];

for(let i =0;i < a0.length;i++){
    let clone = a0.map(row => [...row]);
    for(let j =0;j<a0.length;j++){
        clone[j][i] = a1[j];
    }
    let x = math.det(clone)/math.det(a0);
    aws.push(x);
}

let sum =0;
for(let i =0;i<aws.length;i++){
    sum += aws[i] * math.pow(f,i);
}
console.log(sum);
