# 1) https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

def check_alive(health):
    return health > 0


# 2) https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

def capitalize(s):
    even = ""
    odd = ""

    for i in range(len(s)):
        if i % 2 == 0:
            even += s[i].upper()
            odd += s[i]
        else:
            even += s[i]
            odd += s[i].upper()

    return [even, odd]


# 3) https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

def dna_to_rna(dna):
    return dna.replace("T", "U")


# 4) https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

def is_triangle(a, b, c):
    return a > 0 and b > 0 and c > 0 and \
            a + b > c and a + c > b and b + c > a


# 5) https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript

def is_kiss(sentence):
    words = sentence.split()
    word_count = len(words)

    for word in words:
        if len(word) > word_count:
            return "Keep It Simple Stupid"

    return "Good work Joe!"

