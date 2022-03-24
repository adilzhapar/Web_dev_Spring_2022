# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem?isFullScreen=true
n = int(input())
arr = list(map(int, input().split()))
print(max([i for i in arr if i != max(arr)]))