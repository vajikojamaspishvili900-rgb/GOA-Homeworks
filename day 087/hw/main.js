// 1) CodeCademy:
// (image1.png)

// 1)
// შექმენი Promise (მაგალითად ფუნქცია fetchData), რომელიც setTimeout-ის გამოყენებით 2 წამში დააბრუნებს რაიმე ტექსტს (მაგ: "მონაცემები წარმატებით ჩაიტვირთა").
// შემდეგ დაწერე async ფუნქცია, რომელშიც await ოპერატორის გამოყენებით დაელოდები ამ Promise-ის შესრულებას და დაბრუნებულ შედეგს გამოიტან კონსოლში.


// 2)
// დაწერე ორი ასინქრონული ოპერაცია.

// პირველმა ფუნქციამ (მაგ: getUser()) უნდა დააბრუნოს მომხმარებლის ობიექტი ან უბრალოდ ID (მაგ: { id: 5 }).

// მეორე ფუნქციამ (მაგ: getUserPosts(userId)) არგუმენტად უნდა მიიღოს პირველი ფუნქციიდან დაბრუნებული ID და დააბრუნოს ამ მომხმარებლის პოსტების მასივი (მაგ: ["პოსტი 1", "პოსტი 2"]).
// დაწერე მთავარი async ფუნქცია, სადაც ჯერ ამოიღებ მომხმარებელს, ხოლო შემდეგ მის ID-ს გადააწვდი მეორე ფუნქციას და ამოიღებ პოსტებს. ორივე შედეგი დაბეჭდე.


// 3)
// შექმენი Promise, რომელიც 50%-იანი ალბათობით ან დარეზოლვდება (წარმატებით შესრულდება), ან დარეჯექთდება (შეცდომას დააბრუნებს, მაგ: "სერვერთან კავშირი დაიკარგა").
// დაწერე async ფუნქცია ამ Promise-ის გამოსაძახებლად და სავალდებულოდ გამოიყენე try...catch ბლოკი. თუ ოპერაცია წარმატებით დასრულდა, try ბლოკში დაბეჭდე შედეგი, ხოლო თუ შეცდომა დაფიქსირდა, catch ბლოკმა უნდა დაიჭიროს ეს შეცდომა და გამოიტანოს კონსოლში წითლად (console.error).


// 4)
// წარმოიდგინე, რომ იწერ ორ სხვადასხვა მონაცემს, რომლებიც ერთმანეთზე დამოკიდებული არ არის. შექმენი ორი ფუნქცია: getProducts() (ყოვნდება 2 წამი) და getCategories() (ყოვნდება 3 წამი).
// დაწერე async ფუნქცია, სადაც ამ ორ ოპერაციას გაუშვებ ერთდროულად (ისე, რომ მეორე არ ელოდებოდეს პირველის დასრულებას დაწყებამდე). მხოლოდ მათი გამოძახების შემდეგ გამოიყენე await ორივე ცვლადზე, რათა საბოლოოდ ორივე შედეგი ერთად დაბეჭდო.


// 5)
// შექმენი სამი სხვადასხვა Promise, რომლებიც სხვადასხვა დროით ყოვნდება (მაგალითად: 1 წამი, 1.5 წამი და 2 წამი) და აბრუნებენ სხვადასხვა სტრიქონებს (მაგ: "A", "B", "C").
// დაწერე async ფუნქცია და გამოიყენე await Promise.all(), რათა სამივე Promise-ს დაელოდო პარალელურ რეჟიმში. საბოლოოდ დაბრუნებული შედეგების მასივი გამოიტანე კონსოლში.








// codecademy: (image2.png)




//1

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("მონაცემები წარმატებით ჩაიტვირთა");
        }, 2000);
    });
};

const asyncFunction = async () => {
    const result = await fetchData();
    console.log(result);
};


asyncFunction();






//2

const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({ id: 5 });
        }, 1000);
    });
}

const getUserPosts = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["პოსტი 1", "პოსტი 2"]);
        }, 1000);
    });
}


getUser().then(user => {
    console.log(user);
    return getUserPosts(user.id);
}).then(posts => {
    console.log(posts);
}).catch(error => {
    console.error(error.message);
});




//3

const randomPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if(random < 0.5) {
                resolve("ოპერაცია წარმატებით დასრულდა");
            } else {
                reject(new Error("სერვერთან კავშირი დაიკარგა"));
            }
        }, 1000);
    });
}


randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error.message);
});






//4

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["პროდუქტი 1", "პროდუქტი 2"]);
        }, 2000);
    });
};


const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["კატეგორია 1", "კატეგორია 2"]);
        }, 3000);
    });
}


const asyncFunction1 = async () => {
    const [products, categories] = await Promise.all([getProducts(), getCategories()]);
    console.log(products);
    console.log(categories);
};


asyncFunction1();




//5

const promiseA = new Promise((resolve) => {

    setTimeout(() => {
        resolve("A");
    } , 1000);
});


const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        resolve("B");
    } , 1500);
});

const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("C");
    } , 2000);
});

async function asyncFunction2() {
    const results = await Promise.all([promiseA, promiseB, promiseC]);
    console.log(results);
}

asyncFunction2();







