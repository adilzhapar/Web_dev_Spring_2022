# https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true

def swap_case(s):
    t = ""
    for i in s:
        if i.isalpha():
            if i.islower():
                t += i.upper()
            else:
                t += i.lower()
        else:
            t += i
    return t

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)