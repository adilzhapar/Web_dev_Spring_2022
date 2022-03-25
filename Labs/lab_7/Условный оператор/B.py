def leap(year: int):
    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                return True
            else:
                return False
        else:
             return True
    else:
        return False


n = int(input())
print(leap(n) * "YES" + (not leap(n)) * "NO")