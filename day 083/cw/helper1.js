// # Classwork

// 1) დამხმარე ფაილში შექმენით ფუნქცია რომელსაც გადაეცემა 3 რიცხვითი არგუმენტი და გამოიტანს მაქსიმალურ რიცხვს შემდეგ მთავარ ფაილში დააიმპორტეთ და გამოიძახეთ შემოწმებაც თუ ექნება ფუნქციას რომ ნამდვილად რიცხვი შემოიტანოს კარგი იქნება

// 2) გააკეთეთ დამხმარე ფუნქცია სადაც იქნება პაროლის ვალიდაცია(პაროლი უნდა იყოს მინიმუმ 8 სიმბოლოსგან და უნდა შედგებოდეს როგორც ასოების ისე რიცხვებისგან) შემდეგ გამოიძახეთ ეს ფუნქცია მთავარ ფაილში

// 3) დამხმარე ფაილში შექმენით ორი ფუნქცია ერთი რომელიც აბრუნებს დადებით და თან ლუწ რიცხვებს არგუმენტად გადაეცემა მასივი შემდეგ მეორე ფუნქცია შექმენით რომელიც გამოითვლის საშუალოს ამასაც გადაეცით მასივი

// 4) დამხმარე ფაილში ფუნქციას არგუმენტად გადაეცით მასივი სადაც იქნება როგორც დადებითი ასევე უარყოფითი რიცხვები ფუნქციამ უნდა დაითვალოს დადებითების რაოდენობა და უარყოფითების ჯამი.





//1)
export function getMaxNumber(a, b, c) {
    if (
        typeof a !== "number" || typeof b !== "number" || typeof c !== "number"
    ) {
        return "Error, only numbers!";
    }

    return Math.max(a, b, c);
}

// 2)
export function validatePassword(password) {
    if (typeof password !== "string") {
        return false
    }

    const isLongEnough = password.length >= 8;
    let hasLetters = false
    let hasNumbers = false

    for (let i = 0; i < password.length; i++) {
        if ((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z')) {
            hasLetters = true;
            break;
        }
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumbers = true;
            break;
        }
    }

    return isLongEnough && hasLetters && hasNumbers;
}


// 3)

// 1.
export function getPositiveEvens(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }

    return arr.filter((num) => {
        return typeof num === "number" && num > 0 && num % 2 === 0;
    });
}

// 2.
export function getAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    const sum = arr.reduce((acc, n) => acc + n, 0);
    return sum / arr.length;
}



// 4)
export function countPositivesSumNegatives(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return { positiveCount: 0, negativeSum: 0 };
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (const num of arr) {
        if (typeof num === "number") {
            if (num > 0) {
                positiveCount++;
            } else if (num < 0) {
                negativeSum += num;
            }
        }
    }

    return { positiveCount, negativeSum };
}

