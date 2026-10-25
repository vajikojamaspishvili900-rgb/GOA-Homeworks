# 1.

def wrap(height, width, length):
    small = min(height,width,length)
    return 2*(height + width + length) + 2 * small + 20


# 2.

def up_array(arr):
    for i in arr:
        if len(str(i)) > 1:
            return None
        elif i < 0:
            return None
    res = ""
    final_res = []
    i = 0
    while i < len(arr) - 1 and arr[i] == 0:
        final_res.append(0)
        i += 1
    for i in arr:
        res += str(i)
    if res == "":
        return None
    res = int(res) + 1
    res = str(res)
    for i in res:
        final_res.append(int(i))
    return final_res


