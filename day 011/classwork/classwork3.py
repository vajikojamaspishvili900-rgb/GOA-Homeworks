# 2) 
# მომხმარებელს შეაყვანინე რიცხვი.
# თუ რიცხვი მეტია 10-ზე — დაბეჭდე "დიდია"
# თუ ტოლია 10-ს — დაბეჭდე "ზუსტად 10"
# სხვა შემთხვევაში — დაბეჭდე "პატარაა"


#2)

num = int(input("Enter a Number: "))

if num > 10:
    print("It's too big!")
elif num == 10:
    print("10")
else:
    print("It's too small!")