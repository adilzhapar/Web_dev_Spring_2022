a = int(input())
b = int(input())
n = int(input())
a *= n
b *= n
while(b >= 100):
    a += 1
    b -= 100
print(a, b)