const math =  require('mathjs');
let first = 2;//ค่าล่างของอินทิกเรต
let last = 8;//ค่าบนของอินทริเกต
let func = (x)=>{//สู๖รอินทีเกรดในการบ้าน
    return 4 * math.pow(x,5) - 3 * math.pow(x,4) + math.pow(x,3) - 6 * x + 2;

}

let I = ((last-first)/2)*(func(first)+func(last));//เอามาจาก I =b-a/2 * f(x0)+f(x1)

console.log("is : "+I);