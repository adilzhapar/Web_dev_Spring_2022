n = input()
l1 = list(map(int, input().split()))
print(len([l1[i] for i in range(1, len(l1)) if l1[i] > l1[i - 1]]))