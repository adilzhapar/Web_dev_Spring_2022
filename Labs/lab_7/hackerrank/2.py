# https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true
n = int(input().strip())

if n % 2 == 1:
    print('Weird')
else:
    if n in [i for i in range(2, 6)]:
        print('Not Weird')
    elif n in [i for i in range(6, 21)]:
        print('Weird')
    elif n > 20:
        print('Not Weird')
