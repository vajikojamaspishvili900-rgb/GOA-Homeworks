# 1) დაწერე ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს ახალ სტრინგს, სადაც ყველა მეორე სიმბოლო დიდ ასოდ არის გადაყვანილი

# 2) შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გამრავლებულია თავის ინდექსზე

# 3) დაწერე ფუნქცია, რომელიც იღებს სიას და აბრუნებს მხოლოდ იმ ელემენტებს, რომლებიც მარცხენა და მარჯვენა მეზობელზე დიდია

# 4) შექმენი ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს dictionary-ს, სადაც გასაღები არის სიტყვა, ხოლო მნიშვნელობა — ამ სიტყვის სიგრძე

# 5) დაწერე ფუნქცია, რომელიც იღებს რიცხვს n და აბრუნებს სიას, სადაც არის ყველა რიცხვი 1-დან n-მდე, მაგრამ 3-ის ჯერადები ჩანაცვლებულია სიტყვით "Three"





# 1)
def every_second_upper(string_):
    result = ""
    for i in range(len(string_)):
        if i % 2 == 1:
            result += string_[i].upper()
        else:
            result += string_[i]
    return result
print(every_second_upper("hello world"))    # test

# 2)
def list_element_times_index(list_):
    return [i*list_.index(i) for i in list_]
print(list_element_times_index([1,2,3,4,5]))    #test

# 3)
def list_big(li):
    result = []
    for i in range(1, len(li)-1):
        if li[i] > li[i - 1] and li[i] > li[i + 1]:
            result.append(li[i])
    return result
print(list_big([2,5,3,6,1]))    # test

# 4)
def string_to_dictionary(string):
    return {string:len(string)}
print(string_to_dictionary("hi"))   # test

# 5)
def nums_list_three(n):
    result_list_ = []
    for i in range(1,n+1):
        if i % 3 != 0:
            result_list_.append(i)
        elif i%3==0:
            result_list_.append("Three")
    return result_list_
print(nums_list_three(10))    # test




