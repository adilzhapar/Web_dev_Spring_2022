n = input()
l1 = list(map(int, input().split()))
l2 = [l1[i] for i in range(1, len(l1)) if (
    l1[i] < 0 and l1[i - 1] < 0) or (l1[i] >= 0 and l1[i - 1] >= 0)]
if len(l2):
    print("YES")
else:
    print("NO")
