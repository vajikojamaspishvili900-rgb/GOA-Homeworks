# Codewars (8 kyu):

# https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python
def count_sheep(n):
    result = ""
    for i in range(n):
        result+= f"{i+1} sheep..."
    return result

# https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/python
def get_grade(s1, s2, s3):
    score = (s1+s2+s3)//3
    if 90 <= score <= 100:return'A'
    elif 80 <= score < 90:return'B'
    elif 70 <= score < 80:return'C'
    elif 60 <= score < 70:return'D'
    elif 0 <= score < 60:return'F'

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python
def remove_exclamation_marks(s):
    res = ""
    for i in s:
        if i != "!":
            res+=i
    return res

# https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python
def rental_car_cost(d):
    total = d * 40
    if d >= 7:
        total -= 50
    elif d >= 3:
        total -= 20
    return total

