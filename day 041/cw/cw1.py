# https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python

def factorial(n):
    if n < 0:
        return None
    else:
        result = 1
        for i in range(1, n+1):
            result *= i
        return result
    
