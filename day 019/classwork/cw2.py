# 2) შექმენით სია, ჩაამატეთ ამ სიის ბოლოს რაიმე მნიშვნელობა,
# შემდეგ ამ სიიდან წაშალეთ ყველაფერი და ჩაამატეთ რაიმე 3 მნიშვნელობა

list = [1, 2, 3, 4, 5, 6, 7, 8]

list.insert(-1, 9)
list.clear()
list.insert(0, 1)
list.insert(1, 2)
list.insert(2, 3)
print(list)





list = [1, 2, 3, 4, 5, 6, 7, 8]

y = len(list)
list.insert(y, 9)

list.clear()
list.insert(0, 1)
list.insert(1, 2)
list.insert(2, 3)
print(list)