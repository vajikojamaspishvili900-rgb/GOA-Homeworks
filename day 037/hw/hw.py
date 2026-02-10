# გააკეთეთ შემდეგი Codewars-ები

# 1) https://www.codewars.com/kata/52fba66badcd10859f00097e/train/python

# 2) https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

# 3) https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python

# 4) https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/python

# 5) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python



# 1)
def disemvowel(string_):
    return "".join(i for i in string_ if i not in "aeiouAEIOU")

# 2)
def reverse_seq(n):
    return [i for i in range(1, n+1)][::-1]

# 3)
def smash(words):
    return " ".join([i for i in words])

# 4)
def invert(lst):
    return [-i for i in lst]

# 5)
def dont_give_me_five(start,end):
    return len([i for i in range(start, end+1) if "5" not in str(i)])
