// # Classwork

// 1) https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python
// 2) https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// 3) https://www.codewars.com/kata/57a0885cbb9944e24c00008e
// 4) https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python

// ========================================================================

// 1)
var countSheep = function (num) {
    let res = "";
    for (let i = 1; i <= num; i++) {
        res += `${i} sheep...`;
    }
    return res;
};

// 2)
function getGrade(s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3;
    switch (true) {
        case 90 <= score && score <= 100:
            return 'A'
        case 80 <= score && score < 90:
            return 'B'
        case 70 <= score && score < 80:
            return 'C'
        case 60 <= score && score < 70:
            return 'D'
        case 0 <= score && score < 60:
            return 'F'
    }
}

// 3)
function removeExclamationMarks(s) {
    return s.replaceAll("!", "");
}

// 4)
function rentalCarCost(d) {
    let sum = d * 40
    if (d >= 7) {
        sum -= 50
    } else if (d >= 3) {
        sum -= 20
    }
    return sum
}


