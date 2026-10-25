# 1) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python
# 2) https://www.codewars.com/kata/6a885cb8c299e537f3570f86/train/python


# 1)
def multiples(a, b, limit):
    nums = []
    
    for n in range(1, limit+1):
        if n % a == 0 and n % b == 0:
            nums.append(n)
        
    return nums


# 2)
def shopping_spree(p, shop):
    output = 0
    cost = 0
    m1 = 0
    m2 = 0
    for item in shop:
        output += 1
        if item > m1:
            m2 = m1
            m1 = item
        elif item > m2:
            m2 = item
        cost += item
        if cost - m1 - m2 > p:
            output -= 1
            break
    return output


