def power(a, n):
    return a ** n

a, b = map(str, input().split())
a = float(a)
b = int(b)
print(power(a, b))