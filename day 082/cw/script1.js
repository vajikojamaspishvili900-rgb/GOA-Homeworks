// # Classwork

// 1) // class BankAccount{
//     constructor(name, lastName, balance){
//         this.name = name
//         this.lastName = lastName
//         this.balance = balance
//     }

//     backOut(num){
//         if(this.balance<num){
//             console.log(`${this.lastName}, თქვენს ანგარიშზე ამდენი თანხა არ არის`);
//             return            
//         }else{
//             console.log(`${this.lastName} თანხა წარმატებით გამოიტანეთ`);
//             this.balance = this.balance - num
//             console.log(`თქვენ ანგარიშზე დარჩენილია $${this.balance}`);
//         }
//     }

//     inOut(num1){
//         this.balance += num1
//         console.log(`თქვენს ანგარიშზე თანხა წარმატებით შეიტანეთ თანხა შეადგენს $${this.balance}`);   
//     }
// }

// const myBank = new BankAccount("Test", "Testaze", 1257.82)
// myBank.backOut(1200.81)
// myBank.inOut(12)

// ამ კოდს დაუმატეთ ფუნქცია რომ თუ მომხმარებელი პაროლს სწორს არ შეიყვანს არ შეეძლება არც თანხის შეტანა და გამოტანა მინიშნება: კონტრუქტორში უნდა დაამატოთ ერთი პარამეტრი

// 2) შექმენით კლასი TaxiTrip რომელიც კონსტრუქტორში მიიღებს driverName და pricePerKm დაამატე თვისება totalDistance(საწყისი 0) დაამატე მეთოდი startTrip(km) რომელიც გადაცემულ km დაუმატებს totalDistance და კონსოლში დაბეჭდავს მგზავრობის ღირებულებას

// 3) შექმენით კლასი FitnessTracker კონსტრუქტორში დააყენეთ ორი თვისება steps, caloriesBurned ორივე საწყისად 0 დაამატეთ მეთოდი walk(stepsCount) რომელიც გაზრდის ნაბიჯების რაოდენობას 100 ით ყოველ 1000 ნაბიჯზე caloriesBurned ს დაუმატეთ 50 და გამოიტანეთ ბოლოს მონაცემები

// 4) შექმენით კლასი Thermostat სადაც მიმდინარე ტემპერატურა(temperature) იქნება 22 გრადუსი დაამატეთ მეთოდები warmUp() და coolDown() გააკეთეთ უსაფრთხოების წესი: ტემპერატურა არ უნდა ავიდეს 30 ზე ზემოთ და არ უნდა ჩამოვიდეს 16 ზე ქვემოთ.




// 1)

class BankAccount{
    constructor(name, lastName, balance, password){
        this.name = name
        this.lastName = lastName
        this.balance = balance
        this.password = password
    }

    backOut(num, pass){
        if(this.password !== pass){
            console.log("პაროლი არასწორია, ანგარიშზე ვერ შეძლებთ თანხის გამოტანას");
            return
        }
        if(this.balance<num){
            console.log(`${this.lastName}, თქვენს ანგარიშზე ამდენი თანხა არ არის`);
            return            
        }else{
            console.log(`${this.lastName} თანხა წარმატებით გამოიტანეთ`);
            this.balance = this.balance - num
            console.log(`თქვენ ანგარიშზე დარჩენილია $${this.balance}`);
        }
    }

    inOut(num1, pass){
        if(this.password !== pass){
            console.log(`${this.name}, პაროლი არასწორია, ანგარიშზე ვერ შეძლებთ თანხის შეტანას`);
            return
        }
        this.balance += num1
        console.log(`თქვენს ანგარიშზე თანხა წარმატებით შეიტანეთ თანხა შეადგენს $${this.balance}`);   
    }
}

// test

const myBank = new BankAccount("Test", "Testishvili", 1257.82, "1234")

myBank.backOut(1200.81, "1234")
myBank.backOut(1200.81, "araswori")
myBank.inOut(12, "1234")
myBank.inOut(12, "araswori")


// 2)

class TaxiTrip{
    constructor(driverName, pricePerKm){
        this.driverName = driverName
        this.pricePerKm = pricePerKm
        this.totalDistance = 0
    }

    startTrip(km){
        this.totalDistance += km
        const tripCost = this.totalDistance * this.pricePerKm
        console.log(`მგზავრობის ღირებულება არის $${tripCost}`);
    }
}


// test

const trip = new TaxiTrip("mzgoli mzgoladze", 5)
trip.startTrip(10)
trip.startTrip(5)



// 3)


class FitnessTracker{
    constructor(){
        this.steps = 0
        this.caloriesBurned = 0
    }

    walk(stepsCount){

        this.steps += stepsCount

        const newCalories = Math.floor(this.steps / 1000) * 50

        this.caloriesBurned += newCalories
    }
}

// test

const tracker = new FitnessTracker()
tracker.walk(1500)
console.log(tracker)
tracker.walk(2000)
console.log(`ნაბიჯების რაოდენობა: ${tracker.steps}, კალორიების რაოდენობა: ${tracker.caloriesBurned}`)




// 4)

class Thermostat{
    constructor(){
        this.temperature = 22
    }

    warmUp(){

        if(this.temperature < 30){
            this.temperature++
            console.log(`ტემპერატურა გაიზარდა, ახლა არის ${this.temperature}°C`);
        } else {
            console.log("ტემპერატურა უკვე მაქსიმუმზეა (30°C)");
        }

    }

    coolDown(){
        if(this.temperature > 16){
            this.temperature--
            console.log(`ტემპერატურა შემცირდა და ახლა არის ${this.temperature}°C`);
        }else {
            console.log("ტემპერატურა უკვე მინიმუმზეა (16°C)");
        }

    }
}


// test

const thermostat = new Thermostat()
thermostat.warmUp()
thermostat.warmUp()
thermostat.warmUp()
thermostat.coolDown()
thermostat.coolDown()
thermostat.coolDown()
thermostat.coolDown()
thermostat.coolDown()





