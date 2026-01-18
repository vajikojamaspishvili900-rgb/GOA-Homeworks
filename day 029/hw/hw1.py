# გააკეთეთ შემდეგი Codewarsები:


# 7 Kyu:


# 0) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python
def odd_ball(arr):
    if arr.index("odd") in arr:
        return True
    else:
        return False


# 1) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python
def dont_give_me_five(start,end):
    co = 0
    for y in range(start, end+1):
        s = str(y)
        if "5" not in s:
            co += 1
    return co


# 2) https://www.codewars.com/kata/580a4734d6df748060000045/train/python
def is_sorted_and_how(arr):
    ar = sorted(arr)
    ar.reverse()
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == ar:
        return "yes, descending"
    else:
        return "no"


# 3) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(sentence):
    vowel = "aeiou"
    count = 0
    for i in sentence:
        if i in vowel:
            count += 1
    return count


# 6 Kyu:


# 4) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    word = word.lower(  )
    string = ""
    for i in word:
        if word.count(i) == 1:
            string += "("
        elif word.count(i) != 1:
            string += ")"
    return string

