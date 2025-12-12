# 2) ჩამოწერეთ დღეს ნასწავლი list ფუნქციები
# 3) მომხმარებელს შემოატანინეთ თავისი სახელი, მეგობარი1ის სახელი და მეგობარი2ის სახელი,
# შემდეგ ეს სახელები შეასწორეთ(ისე როგორც წინა საკლასოში), შემდეგ ეს გასწორებული სახელები ჩაამატეთ სიაში,
# საბოლოოდ კი შექმენით ახალი დასორტირებული სია და დაპრინტეთ


#2)
# sum()
# max()
# min()
# .copy()
# sorted()


#3)
user_name = input("Enter your name: ")
friend1 = input("Enter your friend 1 name: ")
friend2 = input("Enter your friend 2 name: ")

correct_username = user_name.title()
correct_friend1 = friend1.title()
correct_friend2 = friend2.title()

names = [correct_username, correct_friend1, correct_friend2]

sorted_names = sorted(names)

print("Sorted names: ", sorted_names)