n = input()
l1 = list(map(int, input().split()))
print(len([i for i in l1 if i > 0]))