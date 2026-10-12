# 1) https://www.codewars.com/kata/563b662a59afc2b5120000c6

def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 = int(p0 + p0*(percent/100)+aug)
        years+=1
    return years


# 2) https://www.codewars.com/kata/5266876b8f4bf2da9b000362

def likes(names):
    if len(names) == 0:
        return("no one likes this")
    elif len(names) == 1:
        return(f"{names[0]} likes this")
    elif len(names) == 2:
        return(f"{names[0]} and {names[1]} like this")
    elif len(names) == 3:
        return(f"{names[0]}, {names[1]} and {names[2]} like this")
    else:
        return(f"{names[0]}, {names[1]} and {len(names)-2} others like this")


# 3) https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

def first_non_repeating_letter(s):
    si = s.lower()
    for i in s:
        if si.count(i.lower()) == 1:
            return i
    return ""


# 4) https://www.codewars.com/kata/57f8ff867a28db569e000c4a

def kebabize(st):
    result = ""
    for i in st:
        if i.isdigit():
            pass
        elif i.isupper():
            result += "-" + i.lower()
        else:
            result += i
    return result.lstrip("-")


# 5) https://www.codewars.com/kata/5878520d52628a092f0002d0

def string_transformer(string):
    return " ".join(i.swapcase() for i in string.split(" ")[::-1])


# 6)https://www.codewars.com/kata/56fcfad9c7e1fa2472000034

def evil(n):
    ones_count = bin(n).count('1')
    if ones_count % 2 == 0:
        return "It's Evil!"
    else:
        return "It's Odious!"


# 7)https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

def swap_values(list): 
    list[0], list[1] = list[1], list[0]
    return list


# 8)https://www.codewars.com/kata/57eae20f5500ad98e50002c5

def no_space(x):
    return x.replace(" ", "")

