# გააკეთეთ შემდეგი codewars-ები lambda-ს მეშვეობით

# 0) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python

# 1) https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

# 2) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

# 3) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/python

# 4) https://www.codewars.com/kata/515e271a311df0350d00000f/train/python



# 0)
dont_give_me_five = lambda start,end: len([i for i in range(start, end+1) if "5" not in str(i)])

# 1)
reverse_seq = lambda n:[i for i in range(1, n+1)][::-1]

# 2)
get_count = lambda sentence: len([i for i in sentence if i in "aeiou"])

# 3)
filter_list = lambda l: [i for i in l if type(i) == int]

# 4)
square_sum = lambda numbers: sum([i**2 for i in numbers])


