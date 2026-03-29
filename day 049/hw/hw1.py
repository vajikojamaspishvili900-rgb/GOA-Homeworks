# 1) შექმენი სია რიცხვებით და გამოიყენე map, რომ ყველა რიცხვი გააორმაგო.

# 2) შექმენი სია და გამოიყენე map, რომ ყველა სიტყვა გადაიყვანო დიდი ასოებით.

# 3) შექმენი რიცხვების სია და გამოიყენე filter, რომ სიიდან აირჩიო მხოლოდ ლუწი რიცხვები.

# 4) შექმენი ფუნქცია, რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს *args-ით და აბრუნებს მათ ჯამს.

# 5) შექმენი ფუნქცია, რომელიც იღებს **kwargs-ს და ბეჭდავს ყველა key-ს და value-ს.



# 1)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
double = list(map(lambda x: x*2,numbers))
print(double)

# 2)
words = ["hello", "world", "programming", "python"]
upper_words = list(map(lambda y: y.upper(), words))
print(upper_words)

# 3)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)

# 4)
def sum_numbers(*args):
    return sum(args)
print(f"\nSum of {1, 2, 3, 4, 5}: {sum_numbers(1, 2, 3, 4, 5)}.\n")    # Test

# 5)
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_kwargs(name="Vajiko", age=14, city="Tbilisi")    # Test
