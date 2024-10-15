const math = require('mathjs');
let fisrt = -1;
let last = 2;
let n = 2;

let func = (x) => {
    return math.pow(x, 7) + 2 * math.pow(x, 3) - 1;
}

do {

    let h = (last - fisrt) / (n * 2);//ระวังโดนหลอก
    let sumOod = 0;
    let sumEven = 0;
    let num = 1;
    for (let i = fisrt + h; i < last; i += h) {
        if (num % 2 == 0) {
            sumEven += func(i);
        } else {
            sumOod += func(i);
        }
        num++;
    }
    I = (h / 3) * (func(fisrt) + func(last) + (4 * sumOod) + (2 * sumEven))//สูตรในที่จด
    console.log("N : "+n+" is : "+I);
    n+=2;
} while (n <= 6);