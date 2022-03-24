def xor(a, b):
    if (a == True and b == True) or (a == False and b == False):
        return 0
    return 1

a, b = map(int, input().split())
print(xor(a, b))