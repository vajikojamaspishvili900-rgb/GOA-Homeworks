# 2) შექმენით ფუნქცია სახელად manual_count, რომელსაც გადაეცემა ლისთი და ელემენტი, უნდა გამოიტანოს ელემენტების რაოდენობა ლისთში
# 3) შექმენით ფუნქცია სახელად manual_find, რომელსაც გადაეცემა ლისთი და ელემენტი, უნდა გამოიტანოს ელემენტის ინდექსი ლისთში


def manual_count(li, el):
    co = 0
    for i in li:
        if i == el:
            co += 1
    return co


def manual_find(li, el):
    return li.index(el)

def manual_find(li, el):
    for i in range(len(li)):
        if li[i] == el:
            return i
print(manual_find([1, 2, 3, 4, 5], 3))