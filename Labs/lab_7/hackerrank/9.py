# https://www.hackerrank.com/challenges/nested-list/problem?isFullScreen=true
my_dic = {}
for _ in range(int(input())):
    name = input()
    score = float(input())
    my_dic[name] = score

my_dic = dict(sorted(my_dic.items(), key=lambda x: (x[1], x[0])))

sec = min([i for i in my_dic.values() if i != min(my_dic.values())])

for i, j in my_dic.items():
    if j == sec:
        print(i)
    if j > sec:
        break