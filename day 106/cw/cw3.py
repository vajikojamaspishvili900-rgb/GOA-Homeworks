# 5) https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python

# 6) https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/python



# 5)
def sum_of_minimums(numbers):
    for i in range(len(numbers)):
        numbers[i] = min(numbers[i])
    return sum(numbers)


# 6)
def max_tri_sum(numbers):
    return sum(sorted(set(numbers))[-3:])

