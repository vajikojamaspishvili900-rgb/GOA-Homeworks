# 1) https://www.codewars.com/kata/54ff3102c1bad923760001f3
# 2) https://www.codewars.com/kata/546e2562b03326a88e000020

def get_count(sentence):
    xmo = "aeiou"
    li = []
    for i in sentence:
        if i in xmo:
            li.append(i)
    return len(li)

def square_digits(num):
    number = ""
    for i in str(num):
        number = number + str(int(i)**2)
    return int(number)