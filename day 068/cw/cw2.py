# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python
def is_valid_walk(walk):
    w=walk
    return len(w)==10 and w.count('n')==w.count('s') and w.count('e')==w.count('w')

# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    result = 0
    result2 = 0
    for i in str(n):
        result += int(i)
    while len(str(result)) != 1:
        for i in str(result):
            result2 += int(i)
        result = result2
        result2 = 0
    return result

# https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
def get_middle(s):
    mid = len(s) // 2
    if len(s) % 2 == 0:
        return s[mid-1:mid+1]
    return s[mid]

