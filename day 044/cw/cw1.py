# 1) შემქენით პროგრამა რომელიც მომხმარებელს შემოატანინებს ორ რიცხვს და ყოფს ერთამენთზე. გამოიყენეთ try / except რომ პროგრამა არ გაჩერდეს თუ მომხმარებელმა შემოიტანა 0

# 2) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვის შეყვანას. თუ მომხმარებელმა რიცხვის ნაცვლად ტექსტს შეიყვანს გამოიტანეთ შესაბამისი მესიჯი.

# 3) შექმენით სია და მომხმარებელს შემოატანინეთ ინდექსი. გამოიყენეთ try და except, რათა პროგრამამ error არ გამოიტანოს თუ ინდექსი სიაში არ არსებობს

# 4) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვს და შემდეგ გამოაქვს მისი კვადრატი. გამოიყენეთ try და except, რათა თავიდან აიცილოთ არასწორი მონაცემის შეყვანა


# 1)
try:
    num1 = float(input("First Number: "))
    num2 = float(input("Second Number: "))
    result = num1 / num2
    print(result)
except ZeroDivisionError:
    print("error, you can't divide by zero.")

# 2)
try:
    num = float(input("Enter a number: "))
except ValueError:
    print("error, enter a valid number.")

# 3)
li = [1,2,3,4,5,67,8,9,10]
try:
    x = int(input("Enter an index: "))
    print(li[x])
except IndexError:
    print("error, enter a valid index.")

# 4)
try:
    num = float(input("Enter a number: "))
    print(num ** 2)
except ValueError:
    print("error, enter a valid number.")
