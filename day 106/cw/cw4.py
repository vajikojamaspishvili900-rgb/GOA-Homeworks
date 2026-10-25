# 7)https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9
# 8)https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa



# 7)
def up_array(arr):
    if len(arr) == 0:
        return None

    for num in arr:
        if num < 0 or num > 9:
            return None

    number = int("".join(map(str, arr))) + 1
    result = []

    for i in str(number):
        result.append(int(i))

    while len(result) < len(arr):
        result.insert(0, 0)

    return result


# 8)
open_or_senior = lambda data: ["Senior" if age >= 55 and handicap > 7 else "Open" for age, handicap in data]


