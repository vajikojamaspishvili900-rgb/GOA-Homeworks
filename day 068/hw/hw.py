# გააკეთეთ შემდეგი codewars-ები, პითონით ან ჯავასკრიპტით, ასევე გააკეთეთ ყველა ჩაგდებული codewars classwork ის სექციაში

# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 == 1:
            return num

# https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/python
def DNA_strand(dna):
    complement = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    result = ""
    for i in dna:
        result += complement[i]
    return result

# https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python
def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    maxi = max(nums)
    mini = min(nums)
    return f"{maxi} {mini}"

# https://www.codewars.com/kata/5208f99aee097e6552000148/train/python
def solution(s):
    result = ""
    for i in s:
        if i.isupper():
            result += " "
        result += i
    return result

# https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/python
def max_diff(lst):
    lst.sort()
    if len(lst) <= 1:
        return 0
    else:
        return max(lst) - min(lst)
