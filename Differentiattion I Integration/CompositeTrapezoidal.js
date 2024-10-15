const math = require('mathjs');
let first = 2;//ค่าล่างของอินทิกเรต
let n = 2;//ตามที่เขาให้มา
let last = 8;//ค่าบนของอินทริเกต
let func = (x) => {//สู๖รอินทีเกรดในการบ้าน
    return 4 * math.pow(x, 5) - 3 * math.pow(x, 4) + math.pow(x, 3) - 6 * x + 2;
}
//2หัว4กลาง//6ท้าย

//หาH สูตร (b-a)/n
do {//n=2,4,6
    let h = (last - first) / n;
    let sum = 0;
    for (let i = first + h; i < last; i += h) {
        sum += func(i);
    }
    let I = (h / 2) * (func(first) + func(last) + (2 * sum));
    console.log("N : "+n +" is : " + I);
    n +=2;
} while (n <= 6);