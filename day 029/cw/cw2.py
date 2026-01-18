# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
def find_it(seq):
    for i in seq:
        count = seq.count(i)
        if count % 2 != 0:
            return i