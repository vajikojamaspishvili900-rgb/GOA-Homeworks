def find_missing_letter(chars):
    lowered = []
    isUpper = False
    if chars[0].isupper():
        isUpper = True
    for i in chars:
        lowered.append(i.lower())
    alph = 'abcdefghijklmnopqrstuvwxyz'
    startingIndex = alph.index(lowered[0])
    for i in range(len(chars)):
        if lowered[i] != alph[startingIndex]:
            if isUpper == True:
                return alph[startingIndex].upper()
            else:
                return alph[startingIndex].lower()
        startingIndex += 1
