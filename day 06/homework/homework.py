#0)კომენტარების დახმარებით ჩამოწერეთ ლოგიკური ოპერატორები და რომელი რას აკეთებს:

# ლოგიკური ოპერატორები: and, or, not.
#And - გამოაქვს True მხოლოდ მაშინ როცა ორივე გადაცემული არგუმენტი არის True.
#Or - გამოაქვს True თუ მინიმუმ ერთი არგუმენტი არის True, ორივე არგუმენტი False-ი არ უნდა იყოს.  თუ ორივე არგუმენტი არის False, მაშინ გამოაქვს False.
#Not - აბრუნებს საპირისპირო ლოგიკურ მნიშვნელობას.

#1)დაწერეთ 6 პრინტი, რომელშიც შედარების ოპერატორების დახმარებით გამოიყვანთ 3ში False და 3ში True:
print(4 < 2)  # False
print(6 != 6)  # False
print(9 >= 10)  # False
print(5 > 3)  # True
print(10 == 10)  # True
print(7 <= 8)  # True

#2)დაწერეთ 6 პრინტი, რომელშც ლოგიკური ოპერატორების (and, or, not) დახმარებით გამოიყვანთ 3ში False და 3ში True:
print(True and False) # False
print(False or False) # False
print(not True) # False
print(True and True) # True
print(True or False) # True
print(not False) # True

#3)კოდის გაშვების გარეშე გაარკვიეთ თუ რას გამოიტანს ეს: (True and not False) or (False and True) or (not (False or False) and True) and (True or not (False and True))
(True and not False) or (False and True) or (not (False or False) and True) and (True or not (False and True)) # უნდა გავიგოთ რას გამოიტანს.
(True)
# პასუხი: True

#4)კოდის გაშვების გარეშე გაარკვიეთ თუ რას გამოიტანს ეს: (15 + 5 > 10 * 2 and 50 / 5 == 10 or 7 - 2 >= 6) and not (20 < 10 + 15 and 9 / 3 == 2 or 8 - 3 < 2) or (30 / 3 == 10 and (14 - 4 > 5 + 5 or 6 * 2 == 11)) and (40 == 39 + 1 or 12 / 4 != 3)

(15 + 5 > 10 * 2 and 50 / 5 == 10 or 7 - 2 >= 6) and not (20 < 10 + 15 and 9 / 3 == 2 or 8 - 3 < 2) or (30 / 3 == 10 and (14 - 4 > 5 + 5 or 6 * 2 == 11)) and (40 == 39 + 1 or 12 / 4 != 3) # უნდა გავიგოთ რას გამოიტანს.
(False)
# პასუხი: False