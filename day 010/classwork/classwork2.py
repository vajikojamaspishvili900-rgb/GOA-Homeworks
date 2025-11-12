#2) შექმენით ცვლადი სახელად correct_password სადაც შეინახავთ რაიმე პაროლს, შემდეგ მომხამრებელს შემოატანინეთ პაროლი, სანამ ეს პაროლი არ იქნება correct_passwordის ტოლი, თავიდან შემოიტანონ პაროლი

correct_password = "vajiko123"
User_input = input("please enter the password: ")
while User_input != correct_password:
    print("Its incorrect, try again.")
    User_input = input("please enter the password: ")
print("Welcome!")