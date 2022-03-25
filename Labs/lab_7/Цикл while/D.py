n = int(input())

while n > 0:
    if n == 1:
        print('YES')
        break
    n /= 2
else:
    print('NO')