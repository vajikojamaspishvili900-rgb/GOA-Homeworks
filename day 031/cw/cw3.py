# 4) შექმენით tuple ჩვენი ჯგუფის მოსწავლეებით, გამოიყენეთ unpacking პირველი სტუდენტი შეინახოს ცვლადში Student1,
# მეორე Student2ში ხოლო დანარჩენი ლისთში სახელად Others

tuple = ("Daviti","Nika","Giorgi","Ilia","Gaga")
Student1,Student2,*Others = tuple

print(Student1)
print(Student2)
print(Others)