// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    for (let i of arr) {
        if (i > 0) {
            sum += i;
        }
    }
    return sum;
}

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
    let n = ""
    for (let i of String(num)) {
        n += String(Number(i) ** 2)
    }
    return Number(n)
}

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

const squareSum = (numbers) => {
    let num = 0;
    for (let i of numbers) {
        i = i ** 2
        num += i
    }
    return num
}


// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i
    }
    return result
}


// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

const noSpace = (x) => x.replaceAll(" ", "")


// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// function toJadenCase() {
//     word = String.split(" ")
//     lis = []
//     for (let i of word) {
//         lis.push(i.capitalize())
//     }
//     return (lis).join(" ")
// }




