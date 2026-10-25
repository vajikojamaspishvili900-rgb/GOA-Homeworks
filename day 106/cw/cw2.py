# 3) https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/python
# 4) https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0/train/python



# 3)
def find_next_square(sq):
    root = int(sq**0.5)

    if root * root == sq:
        next_root = root+1
        return next_root**2
    else:
        return -1


# 4)
def wrap(height, width, length):
    sides = [height, width, length]
    sides.sort()

    return 2 * (sides[1] + sides[0]) + 2 * (sides[2] + sides[0]) + 20

