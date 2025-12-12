# name = "aaa"
# print(name.upper())

# name = "AAA"
# print(name.lower())


# name = "nika"
# print(name.capitalize())

# name = " aaa "
# print(name.strip())


# name = "nika abuladze"
# print(name.title())


# name = "nikaabuladze"
# print(name.find("a"))

# print(name.count("a"))


# 0) ჩამოწერეთ ყველა ნასწავლი string ფუნქციები
# 1) მომხმარებელს შემოატანინეთ თავისი სახელი, შესაძლოა რომ მომხმარებელმა თავისი სახელი დაწერა არასწორად
# (თავისი სახელი არ იწყება დიდი ასოთი და როგორც ვიცით ყველა სახელი დიდი ასოთი იწყება), ამიტომაც შეუსწორეთ და ისე დააბრუნეთ

#0)
# .upper()
# .lower()
# .strip()
# .find()
# .count()
# .title()
# .capitalize()
# .replace()
# .swapcase()


#1)
name = input("Enter your name: ")
correct_name = name.title()
print("Corrected: ", correct_name)