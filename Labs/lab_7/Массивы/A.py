n = int(input())
l1 = list(map(int, input().split()))
print(*[l1[i] for i in range(len(l1)) if i % 2 == 0])