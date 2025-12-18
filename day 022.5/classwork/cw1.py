array = ['Vajiko', 'nikusha', 'Nikusha 🦁', 'Gio', 'gio🍷', 'Daviti 🥁', 'daviti🏠🔥', 'Ilia mepirvele', 'Ilia meore', 'lazare', 'Aleqsandre']

# შენი მიზანია რომ დაპრინტო სია სადაც იქნება მხოლოდ ისეთი ელემენტები რომლებიც იწყება დიდი ასოთი

array1 = []

for i in array:
    if i[0] == i[0].upper():
        array1.append(i)

print(array1)




list = [2,3,5]
for i in list:
    print(i)