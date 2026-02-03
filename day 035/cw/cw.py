# 1) შექმენით ერთი list, სადაც გექნებაც მოცემული ინტეჯერი რიცხვები მოცემული 1 დან 12მდე, 
# თქვენი დავალებაა რომ გააორმაგოთ თითოეული რიცხვი თითოეულ იტერაციაზე

# 2) list comprehension დროს დაატრიალეთ for loop და დააგენერირეთ რიცხვები 0 დან 20 მდე

# 3) შექმენით ერთი ლისთი ხილზე, და გაფილტრეთ იმ ხილის სახელები რომლებიც არ იწყება "A" ზე

# 4) შექმენით ერთი ინტეჯერების list სადაც გექნებათ მოცემული რიცხვები 1 დან 20 მდე, 
# თქვენი დავალებაა რომ გაფილტროთ კენტი რიცხვები list comprehension გამოყენებით

# 5)https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/python



# 1)
nums1 = [i*2 for i in range(1,12)]
print(nums1)

# 2)
nums2 = [y for y in range(20)]

# 3)
fruits = ["Banana", "Ananas", "Orange", "Pear", "Peach", "Apple"]
sorted_fruits = [x for x in fruits if x[0] != "A"]
print(fruits)
print(sorted_fruits)

# 4)
ints = [i for i in range(1,20)]
odds = [y for y in ints if y % 2 != 0]
print(ints)
print(odds)

# 5)
# codewars
geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
def goose_filter(birds):
    return [x for x in birds if x not in geese]