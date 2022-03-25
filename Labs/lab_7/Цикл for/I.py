import math


def fun(number: int):
    count = 0
    for divisor in range(1, int(math.sqrt(number))):
        if number % divisor == 0:
            count += 2

    if int(math.sqrt(number)) ** 2 == number:
        count += 1

    return count


print(fun(int(input())))
