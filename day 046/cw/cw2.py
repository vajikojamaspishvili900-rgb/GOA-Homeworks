# 2) https://www.codewars.com/kata/515decfd9dcfc23bb6000006

def is_valid_IP(string):
    splt = string.split(".")
    if len(splt) != 4:
        return False
    for i in splt:
        if i.isdigit() == False:
            return False
        if len(i) > 1 and i[0] == '0':
            return False
        int_i = int(i)
        if int_i < 0 or int_i > 255:
            return False
    return True


