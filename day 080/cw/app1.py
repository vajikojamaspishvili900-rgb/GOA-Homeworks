# Classwork

# 1) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python

def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]

open_or_senior = lambda data: ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]


# 2) https://www.codewars.com/kata/517abf86da9663f1d2000003/train/python
def to_camel_case(text):
    text = text.replace("-", " ").replace("_", " ")
    splitted = text.split(" ")
    result = ""
    result+=splitted[0]
    for i in range(1,len(splitted)):
        result += splitted[i].capitalize()
    return result


# 3) https://www.codewars.com/kata/69aff09e67eb0ef1d5be0d73/train/python
def thanos_sort(arr):
    if arr == sorted(arr):
        return len(arr)
    mid = len(arr)//2
    if len(arr) %2 != 0:
        mid +=1
    left = thanos_sort(arr[:mid])
    right = thanos_sort(arr[mid:])
    return max(left,right)


# 4) https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python
def move_zeros(lst):
    zeros = [x for x in lst if x == 0]
    norm = [y for y in lst if y != 0]
    return norm + zeros


# 5) https://www.codewars.com/kata/56541980fa08ab47a0000040/train/python
def printer_error(s):
    errors = 0
    for char in s:
        if char > 'm':
            errors = errors + 1
    return f"{errors}/{len(s)}"


# 6) https://www.codewars.com/kata/5656b6906de340bd1b0000ac
def longest(a1, a2):
    return "".join(sorted("".join(set(a1 + a2))))


