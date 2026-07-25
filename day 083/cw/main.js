import {
    getMaxNumber,
    validatePassword,
    getPositiveEvens,
    getAverage,
    countPositivesSumNegatives
} from "./helper1.js";





console.log(getMaxNumber(10, 25, 7))
console.log(getMaxNumber("10", 5, 3))


console.log(validatePassword("pass1234"))
console.log(validatePassword("short1"))
console.log(validatePassword("onlyletters"))


const numbersArray = [-4, -2, 0, 1, 3, 4, 6, 8, 9, 10]
console.log(getPositiveEvens(numbersArray))
console.log(getAverage(getPositiveEvens(numbersArray)))


const mixedNumbers = [1, 2, 3, 4, 5, -1, -2, -3, -4]
const result = countPositivesSumNegatives(mixedNumbers)
console.log(result.positiveCount)
console.log(result.negativeSum)

