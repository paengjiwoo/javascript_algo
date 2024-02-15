maxDP, minDP = [0, 0, 0], [0, 0, 0]

def solve(arr):
    global maxDP, minDP
    maxDP = [
        arr[0] + max(maxDP[0], maxDP[1]), 
        arr[1] + max(maxDP), 
        arr[2] + max(maxDP[1], maxDP[2])
    ]
    
    minDP = [
        arr[0] + min(minDP[0], minDP[1]), 
        arr[1] + min(minDP), 
        arr[2] + min(minDP[1], minDP[2])
    ]

from sys import stdin

N = int(input())
for _ in range(N):
    arr = list(map(int, stdin.readline().split()))
    solve(arr)
print(max(maxDP), min(minDP))