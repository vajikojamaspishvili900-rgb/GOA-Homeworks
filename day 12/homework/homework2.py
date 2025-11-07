# 3)მომხმარებელს შემოატანინეთ ასაკი და ამის მიხედვით დაბეჭდეთ ეს:
#   თუ ასაკი არის 0-12 მაშინ დაპრინტე "ბავშვი"
#   თუ ასაკი არის 13-19 მაშინ დაპრინტე "თინეიჯერი"
#   სხვა შემთხვევაში დაპრინტეთ "ზრდასრული"

age = int(input("Enter your age, please... "))

if age <= 12:
    print("You are just a kid!")
elif age >= 13 and age <= 19:
    print("You are a teenager!")
else:
    print("You are an adult!")