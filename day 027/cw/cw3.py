#5) https://www.codewars.com/kata/5715eaedb436cf5606000381

#p.s

def positive_sum(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum += i
    return sum

#6) https://www.codewars.com/kata/55908aad6620c066bc00002a

def xo(s):
    s = s.lower()
    if s.count("o") == s.count("x"):
        return True
    else:
        return False
    

#7) https://www.codewars.com/kata/56dec885c54a926dcd001095

def opposite(number):
    if number == -number:
        return number
    else:
        return -number
    
#8) https://www.codewars.com/kata/55a2d7ebe362935a210000b2
def find_smallest_int(arr):
    return min(arr)

#9)https://www.codewars.com/kata/54edbc7200b811e956000556
def count_sheeps(sheep):
    num = 0
    for i in sheep:
        if i == True:
            num += 1
    return num