# 5) შექმენით ფუნქცია food_ranking რომელსაც გადაეცემა ერთი default არგუმენტი (category) და არგსები (საჭმელები), ასევე ჰქონდეს counter და გამოიტანოს შედეგი ასეთი ფორმატით
# (default): (counter) (args)
# მაგალითად -- food: 1 khinkali .... 

# 5)
def food_ranking(category, *foods):
    i = 1
    for food in foods:
        print(f"{category}: {i}. {food}")
        i += 1
food_ranking("food","khinkali","mwvadi","lobiani","khapachuri")





# 6) შექმენით ფუნქცია car_builder გადაეცით არგუმენტი kwargs სახით დაპრინტეთ შედეგი ასეთი ფორმატით
# (key): (value)

# 6)
def car_builder(**det):
    for keys, values in det.items():
        print(f"{keys}: {values}")
car_builder(brand="mercedes", color="white")    # Test



