n = input()
l1 = list(map(int, input().split()))
print(*[i for i in l1 if i % 2 == 0])