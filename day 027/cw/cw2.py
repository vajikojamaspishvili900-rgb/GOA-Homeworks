#3) https://www.codewars.com/kata/55685cd7ad70877c23000102

def make_negative( number ):
    if number > 0:
        return -number
    else:
        return number
    

#4) https://www.codewars.com/kata/5467e4d82edf8bbf40000155

def descending_order(num):
    list = []
    result = ""
    for i in str(num):
        list.append(int(i))
        
    numbers = sorted(list)[::-1]
    for i in numbers:
        result = result + str(i)
    return int(result)