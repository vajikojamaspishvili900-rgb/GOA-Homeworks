# 4)დაწერე პროგრამა, რომელიც მომხმარებლისგან შეიტანს სტუდენტის მიღებულ ქულას (0-დან 100-მდე) და if-else პირობით გამოიტანს შესაბამის ნიშანს შემდეგი წესით:

#   ქულა        ნიშანი
#   90 – 100      A
#   80 – 89       B
#   70 – 79       C
#   60 – 69       D
#   0 – 59        F



score = int(input("Enter student's score: "))

if 90 <= score <= 100:
    grade = "A"
elif 80 <= score < 90:
    grade = "B"
elif 70 <= score < 80:
    grade = "C"
elif 60 <= score < 70:
    grade = "D"
elif 0 <= score < 60:
    grade = "F"
else:
    print("Try Again.")

print("The grade is:", grade)