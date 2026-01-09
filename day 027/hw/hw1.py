# გააკეთეთ შემდეგი codewars-ები:

# 0) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python

# 1) https://www.codewars.com/kata/515e271a311df0350d00000f/train/python

# 2) https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

# 3) https://www.codewars.com/kata/555086d53eac039a2a000083/train/python

# 4) https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python



#0)
def filter_list(l):
    li = []
    for i in l:
        if type(i) == int:
            li.append(i)
    return li

#1)
def square_sum(numbers):
    num = 0
    for i in numbers:
        i = i**2
        num += i
    return num

#2)
def friend(x):
    lis = []
    for i in x:
        if len(i) == 4:
            lis.append(i)
    return lis

#3)
def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 != 0:
        return True
    if flower2 % 2 == 0 and flower1 % 2 != 0:
        return True
    else:
        return False

#4)
def disemvowel(string_):
    vow = "aAeEiIoOuU"
    result = ""
    for i in string_:
        if i not in vow:
            result += i
    return result
