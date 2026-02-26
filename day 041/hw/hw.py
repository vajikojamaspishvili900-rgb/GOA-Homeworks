# 0) https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

# 1) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python

# 2) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python

# 3) https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/python

# 4) https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python



# 0)
def disemvowel(string_):
    return "".join(i for i in string_ if i not in "aeiouAEIOU")

# 1)
def odd_ball(arr):
    return arr.index("odd") in arr

# 2)
def dont_give_me_five(start,end):
    return len([i for i in range(start, end+1) if "5" not in str(i)])

# 3)
def solution(text, ending):
    return text.endswith(ending)

# 4)
def xo(s):
    return s.lower().count("o") == s.lower().count("x")
