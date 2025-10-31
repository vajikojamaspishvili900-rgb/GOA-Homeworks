#1) დაწერე while loop, სადაც ცვლადი x იწყება 1-იდან და ყოველ ციკლში ორმაგდება, სანამ არ გადააჭარბებს 20-ს
#2) დაწერე while loop, სადაც counter იწყება 5-იდან და ყოველ ციკლში იზრდება +3-ით, სანამ არ გახდება 20
#3) დაწერე while loop, სადაც text = "" და ყოველ ციკლში ემატება "*" სანამ 6 სიმბოლოდ არ გაიზრდება
#4) დაწერე for loop, რომელიც 1-იდან 5-მდე რიცხვებს უმატებს ერთმანეთს შესაჯამად (sum ცვლადი)
#5) დაწერე for loop, რომელიც 1-იდან 4-მდე რიცხვებს გამრავლებს ერთმანეთზე და შეინახავს product ცვლადში

#1)
x = 1
while x <= 20:
    print(x)
    x = x * 2

#2)
counter = 5
while counter < 20:
    print(counter)
    counter = counter + 3

#3)
text = ""
count = 0
while count < 6:
    text = text + "*"
    count = count + 1
print(text)

#4)
sum = 0
for i in range(6):
    sum = sum + i
print(sum)

#5)
product = 1
for i in range(1, 5):
    product = product * i
print(product)