# 0) ახსენით რა განსხვავებაა listსა და setს შორის

# 1) ჩამოწერეთ და ახსენით setის ფუნქციები

# 2) რა არის dictionary?

# 3) ჩამოოწერეთ და ახსენით dictionaryს ფუნქციები

# 4) შექმენით set და dictionary, შემდეგ კი გამოიყენეთ მათზე 2-2 ნებისმიერი ფუნქცია



#0)
# Setი და Listი განსხვავდება იმით რომ ლისთი არის ordered, ანუ აქვს ინდექსები და შეიძლება შეიცავდეს დუპლიკატ ელემენტებს
# 
# ხოლო Set არის unordered, არ შეიძლება სლაისინგის და ინდექსების გამოყენება მასზე და არ შეიცავს დუპლიკატ ელემენტებს

#1)
#.add() - set-ის ბოლოში ამატებს ახალ ელემენტს
#.remove() - ეს ფუნქცია set-იდან წაშლის არგუმენტად მიღებულ ელემენტს
#.clear() - set-იდან შლის ყველა ელემენტს
#.union() - აერთიანებს ორ set-ს, დააბრუნებს ორი set-ის გაერთიანებულ ელემენტებს
#.difference() - დააბრუნებს იმ ელემენტებს რომელიც გვაქვს პირველ სეტში მაგრამ არა მეორეში

set1={1,3,5,7,9}
set2={2,4,6,8,10}
print(set1.difference(set2)) # {1, 3, 5, 7, 9}
print(set2.difference(set1)) # {2, 4, 6, 8, 10}


#2)
# dictionary - ერთერთი მონაცემთა ტიპია, იწერება ბრჭყალებით {},
# ის ინახავს ინფორმაციას წყვილების სახით, key(გასაღები) და value(მნიშვნელობა)

#მაგალითი
dictionary = {
    "Name":"random",
    "LastName":"random",
    "Age":"random"
}
print(dictionary)



#3)
#.keys() - აბრუნებს dictionary-ის ყველა გასაღებს
#.values() - აბრუნებს ყველა მნიშვნელობას, valueს
#.get() - არგუმენტად გადავცემთ key-ს და დაგვიბრუნებს შესაბამის მნიშვნელობას(value-ს)
#.items() - დაგვიბრუნებს dictionary-ის ყველა წყვილს



#4)

#sets
set1 = {1,2,4,6,8,10}
set1.remove(1)
set1.add(12)

set2 = {1,3,5,7,9}

sett = set1.union(set2)
print(sett)

set_dif = set1.difference(set2)
print(set_dif)


#dictionary
di = {
    "Name":"Dexter",
    "LastName":"Moser",
    "Age":"35",
    "family":{
        "Mother":"Laura Moser",
        "Father":"Harry Morgan",
        "Brother":"Brian Moser"
    }
}

print(di.keys())
print(di.values())
print(di.items())

get = di.get("Name")
print(get)

print(di.get("Name"))