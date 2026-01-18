
# https://www.codewars.com/kata/5545f109004975ea66000086
def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False

# https://www.codewars.com/kata/5601409514fc93442500010b
def better_than_average(class_points, your_points):
    avrg = sum(class_points)//len(class_points)
    if avrg < your_points:
        return True
    else:
        return False
