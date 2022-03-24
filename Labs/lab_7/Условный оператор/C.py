a = int(int(input()))
b = int(int(input()))

print("YES" * ((a == 1 and b == 1) or (a != 1 and b != 1)) + "NO" * ((b == 1 and a != 1) or (b != 1 and a == 1)))