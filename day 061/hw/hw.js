// # Homework

// 1. .forEach

// მასივი: ['ვაშლი', 'მსხალი', 'ატამი']

// მიზანი: forEach-ით გამოიტანე კონსოლში ტექსტი ასეთი ფორმატით: "0: ვაშლი", "1: მსხალი" და ა.შ.

// 2. მასივი: [1, 2, 3, 4, 5, 6]

// მიზანი: forEach-ით შეამოწმე თითოეული რიცხვი. თუ ლუწია, კონსოლში დაწერე "ლუწია", თუ კენტია — "კენტია"

// 3. .map

// მასივი: [100, 250, 50, 80] (ფასები ლარებში)მიზანი: map-ით შექმენი ახალი მასივი, სადაც თითოეულ ფასს დაკლებული ექნება 

// 10%.ფორმულა: price * 0.9.

// 4. .some

// მასივი: ['სახლი', 'გზა', 'ავტომობილი', 'ხე']

// მიზანი: შეამოწმე, არის თუ არა მასივში თუნდაც ერთი სიტყვა, რომლის სიგრძე 10 სიმბოლოზე მეტია.

// 5. .find

// მოცემულობა: გაქვს რიცხვების მასივი: [5, 12, 8, 130, 44].

// მიზანი: იპოვე ამ მასივში პირველივე რიცხვი, რომელიც მეტია 10-ზე.

// 6. .findIndex

// მოცემულობა: გაქვს მასივი: ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'].

// მიზანი: გაიგე, რა ინდექსზე იმყოფება სიტყვა 'ფორთოხალი'.

// 7. .reduce

// მასივი: ['მე', 'მიყვარს', 'JavaScript']

// მიზანი: reduce-ით შეაერთე ეს სიტყვები ერთ გრძელ სტრინგად, მათ შორის ჰქონდეს გამოტოვება (space).

// მოსალოდნელი შედეგი: "მე მიყვარს JavaScript".

// 8. დაასრულეთ საკლასო ვისაც არ დაგისრულებიათ.

// 9. გადახედეთ ჩანაწერს.







// 1. .forEach - ინდექსის და მნიშვნელობის გამოტანა
const fruits = ['ვაშლი', 'მსხალი', 'ატამი'];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 2. .forEach - ლუწობის შემოწმება
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`${num}: ლუწია`);
    } else {
        console.log(`${num}: კენტია`);
    }
});

// 3. .map - ფასდაკლება 10%
const prices = [100, 250, 50, 80];
const discountedPrices = prices.map(price => price * 0.9);
console.log("ფასდაკლებული ფასები:", discountedPrices);

// 4. .some - სიგრძის შემოწმება (> 10 სიმბოლო)
const words = ['სახლი', 'გზა', 'ავტომობილი', 'ხე'];
const isLongWordExists = words.some(word => word.length > 10);
console.log("არის თუ არა 10 სიმბოლოზე მეტი სიგრძის სიტყვა?", isLongWordExists);

// 5. .find - პირველი რიცხვი, რომელიც მეტია 10-ზე
const mixedNumbers = [5, 12, 8, 130, 44];
const firstGreaterTen = mixedNumbers.find(num => num > 10);
console.log("პირველი რიცხვი > 10-ზე:", firstGreaterTen);

// 6. .findIndex - 'ფორთოხლის' ინდექსის პოვნა
const fruitBasket = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ატამი'];
const orangeIndex = fruitBasket.findIndex(fruit => fruit === 'ფორთოხალი');
console.log("'ფორთოხლის' ინდექსია:", orangeIndex);

// 7. .reduce - სიტყვების შეერთება ერთ სტრინგად
const sentenceArray = ['მე', 'მიყვარს', 'JavaScript'];
const fullSentence = sentenceArray.reduce((accumulator, currentWord) => {
    return accumulator + ' ' + currentWord;
});
console.log("შედგენილი წინადადება:", fullSentence);


