# 1) შექმენით ერთი ლისთი, და გაფილტრეთ ამ ლისთიდან ლუწი რიცხვები list comprehension გამოყენებით

# 2) შექმენით ლისთი, თქვენი დავალებაა რომ ყოველ იტერაციაზე თითოეულ ელემენტის პირველი ასო გაადიდოთ 
# და შეინახო ახალ ლისთში list comprehension გამოყენებით

# 3) შექმენით ერთი ლისთი, სადაც გექნებათ შეტანილი სხვადახვა მონაცემთა ტიპის ელემენტები: სტრინგები,
# ინტეჯერები, ბულიანი და ფლოათები, თქვენი დავალებაა რომ ლისთში დატოვოთ მხოლოდ ინტეჯერები, სხვა ყველაფერი კი გაფილტრეთ

# 4) დაასრულეთ საკლასოში ჩაგდებული codewars ვისაც არ დაუსრულებია

# 5) გაიარეთ Python Intermidiateს List Comprehension თავი



# 1)
nums = [i for i in range(1, 50+1)]
evens = [x for x in nums if x % 2 == 0]
print(nums)
print(evens)

# 2)
array = [
    'Vajiko', 'nikusha', 'Nikusha 🦁', 'Gio', 'gio🍷', 'Daviti 🥁', 'daviti🏠🔥',
    'Ilia mepirvele', 'Ilia meore', 'lazare', 'Aleqsandre'
    ]
filtered_array = [x.capitalize() for x in array]
print(array)
print(filtered_array)

# 3)
types = ["hello world", 11, 10.15, False, True, 10, "wow", 67]
sorted_types = [i for i in types if type(i) == int]
print(types)
print(sorted_types)

# 4)
# Davasrule

# 5)
# Gaviare