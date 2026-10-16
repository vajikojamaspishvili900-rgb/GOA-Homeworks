// გააკეთეთ jsით
// 1) https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/train/python
// 2) https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/python
// 3) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python
// 4) https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/python
// 5) https://www.codewars.com/kata/5ff2093d375dca00170057bc/train/python




// 1)

function firstDup(string) {
    for (let i of string) {
        if (string.indexOf(i) !== string.lastIndexOf(i)) {
            return i;
        }
    }
    return undefined;
}

function firstDup(string) {
    for(let i of string){
        if(string.split(i).length > 2){
            return i;
        }
    }
}



// 2)

function solve(s, g) {
    if (s % g !== 0) return -1;

    let r = s / g;

    for (let x = 1; x < r; x++) {
        let y = r - x;

        let a = x;
        let b = y;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        if (a === 1) {
            return [x * g, y * g];
        }
    }

    return -1;
}



// 3)

function multiples(a, b, limit) {
    let ab = a;
    let result = [];

    while (ab <= limit) {
        if (ab % b === 0) {
            result.push(ab);
        }

        ab += a;
    }

    return result;
}



// 4)
function wrap(height, width, length) {
    let sides = [height, width, length];
    sides.sort((a, b) => a - b);

    return 2 * (sides[1] + sides[0]) + 2 * (sides[2] + sides[0]) + 20;
}



// 5)

function rotations(dieArray) {
    let minimum = 1000;

    for (let i = 1; i <= 6; i++) {
        let count = 0;

        for (let num of dieArray) {
            if (num === i) {
                continue;
            } else if (num + i === 7) {
                count += 2;
            } else {
                count++;
            }
        }

        if (count < minimum) {
            minimum = count;
        }
    }

    return minimum;
}











