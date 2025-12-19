# 4) შექმენით ფუნქცია სახელად difference, რომელსაც გადაეცემა სამი რიცხვი,
# შემდეგ გამოიტანეთ ამ სამი რიცხვიდან ყველაზე დიდი და ყველაზე პატარა რიცხვი

def difference(a, b, c):
    maxim = max(a, b, c)
    minim = min(a, b, c)
    return "Maximum Number:", maxim, "Minimum Number:", minim

print(difference(22, 4, 12))