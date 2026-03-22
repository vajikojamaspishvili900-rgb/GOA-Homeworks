# 2) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
# 3) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python


# 2)
find_it = lambda seq: sum(set([i for i in seq if seq.count(i) % 2 != 0]))

# 3)
duplicate_encode = lambda word: ''.join('(' if word.lower().count(i) == 1 else ')' for i in word.lower())


