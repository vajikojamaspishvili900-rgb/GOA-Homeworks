# https://www.codewars.com/kata/526c7363236867513f0005ca/train/python
def is_leap_year(year):
    if year % 4 == 0 and year % 100 != 0:
        return True
    elif year % 400 == 0:
        return True
    else:
        return False


# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python
def solution(number):
    if number < 0:
        return 0
    jami = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            jami += i
    return jami
solution = lambda number:sum(i for i in range(number) if i % 3 == 0 or i % 5 == 0) if number > 0 else 0


# https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/python
def is_kiss(words):
    words = words.split()
    count = len(words)
    for word in words:
        if len(word) > count:
            return "Keep It Simple Stupid"
    return "Good work Joe!"


# https://www.codewars.com/kata/57193a349906afdf67000f50/train/python
def magic_sum(arr):
    li=[]
    for n in arr:
        if "3" in str(n) and n % 2 != 0:
            li.append(n)
    return sum(li)

