# 1) მომხმარებელს შემოატანინეთ ასაკი და რიცხვი, თუ მათი ასაკი არის 20ზე მეტი და არჩეული რიცხვი არის ლუწი გამოიტანეთ "Congrats!" წინააღმდეგ შემთხვევაში გამოიტანეთ "Try again!"


#1

age = int(input("Your Age: "))
number = int(input("Your number: "))

if age > 20 and number % 2 == 0:
    print("Congrats!")
else:
    print("Try Again!")