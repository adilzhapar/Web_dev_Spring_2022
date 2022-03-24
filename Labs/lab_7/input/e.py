v = int(input())
t = int(input())
if v*t > 109:
    print((v*t) % 109)
elif v > 0:
    print(109 - (v*t))
elif v*t < -109:
    print((v*t) % 109)
else:
    print(109 + (v*t))
    
