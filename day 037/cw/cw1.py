# 0) https://www.codewars.com/kata/57241e0f440cd279b5000829/train/python

# 1) https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/python


# 0)
def sum_mul(n, m):
    return "INVALID" if n <= 0 or m <= 0 else sum(range(n, m, n))

# 1)
def area_or_perimeter(l , w):
    return l*w if l==w else ((l+w)*2)