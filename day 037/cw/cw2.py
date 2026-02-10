# 2) https://www.codewars.com/kata/570597e258b58f6edc00230d/train/python

def array(string):
    return ' '.join(string.split(',')[1:-1]) if len(string.split(',')) > 2 else None

