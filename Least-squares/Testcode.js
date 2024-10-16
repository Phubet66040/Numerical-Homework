let k = (x)=>{
    sum = 0;
    for(let i =0;i<x.length;i++){
        sum += Math.pow(x[i],17);
    }
    return sum;
}
let x = [10,15,20]

console.log(k(x));
