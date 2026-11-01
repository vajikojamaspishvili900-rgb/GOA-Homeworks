# Classwork 1

# 0)https://www.codewars.com/kata/52597aa56021e91c93000cb0

def move_zeros(lst):
    zeros = [x for x in lst if x == 0]
    norm = [y for y in lst if y != 0]
    return norm + zeros


# 1)https://www.codewars.com/kata/541c8630095125aba6000c00

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



# Classwork 2

# 2)https://www.codewars.com/kata/5842df8ccbd22792a4000245

def expanded_form(number):
    
    number = str(number)
    answer = []
    place = len(number) - 1

    for digit in number:
        if digit != "0":
            value = int(digit) * (10 ** place)
            answer.append(str(value))
        place -= 1

    return " + ".join(answer)


# 3)https://www.codewars.com/kata/554ca54ffa7d91b236000023

def delete_nth(numbers, n):
    result = []

    for number in numbers:
        count = 0

        for item in result:
            if item == number:
                count += 1

        if count < n:
            result.append(number)

    return result



# Classwork 3

# 4)https://www.codewars.com/kata/5839edaa6754d6fec10000a2

def find_missing_letter(letters):
    for i in range(len(letters) - 1):
        current_letter = ord(letters[i])
        next_letter = ord(letters[i + 1])

        if next_letter - current_letter > 1:
            return chr(current_letter + 1)


# 5)https://www.codewars.com/kata/5552101f47fc5178b1000050 

def dig_pow(n, p):
    total = 0

    for digit in str(n):
        total += int(digit) ** p
        p += 1

    if total % n == 0:
        return total // n

    return -1



# Classwork 4

# 6)https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

def persistence(num):
    count = 0

    while num >= 10:
        product = 1

        for digit in str(num):
            product *= int(digit)

        num = product
        count += 1

    return count


# 7)https://www.codewars.com/kata/6a885cb8c299e537f3570f86 

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



