# Logical Operators

# And
print("And - გამოაქვს True მხოლოდ მაშინ როცა ორივე გადაცემული არგუმენტი არის True.")
print("And: True and True  =>", True and True)   # True
print("And: True and False =>", True and False)  # False

# Or
print("Or - გამოაქვს True თუ მინიმუმ ერთი არგუმენტი არის True, ორივე არგუმენტი False-ი არ უნდა იყოს.  თუ ორივე არგუმენტი არის False, მაშინ გამოაქვს False.")
print("Or: True or False  =>", True or False)    # True
print("Or: False or False =>", False or False)   # False

# Not
print("Not - აბრუნებს საპირისპირო ლოგიკურ მნიშვნელობას.")
print("Not: not False =>", not False)            # True
print("Not: not True  =>", not True)             # False


print(True and True) # True
print(True or False) # True
print(not False) # True

print(True and False) # False
print(False or False) # False
print(not True) # False