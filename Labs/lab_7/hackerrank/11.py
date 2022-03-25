# https://www.hackerrank.com/challenges/python-lists/problem?isFullScreen=true
N = int(input())
arr = []
# last = []
for _ in range(N):
    s = input()
    if 'insert' in s:
        s, i, e = s.split()
        arr.insert(int(i), int(e))
    elif 'print' in s:
        # last.append(arr)
        print(arr)
    elif 'remove' in s:
        s, e = s.split()
        arr.remove(int(e))
    elif 'append' in s:
        s, e = s.split()
        arr.append(int(e))
    elif 'sort' in s:
        arr = list(sorted(arr))
    elif 'pop' in s:
        arr.pop()
    elif 'reverse' in s:
        arr = arr[::-1]

# print(*last, sep='\n')