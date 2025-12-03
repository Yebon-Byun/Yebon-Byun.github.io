---
title: '[1D Dynamic Programming] Climbing Stairs'
description: 'You can climb with either 1 or 2 steps at a time. Return the number of distinct ways to climb to the top of the staircase.'
author: yebon
date: 2025-11-27
categories: ["Data Structures and Algorithms"]
tags: ["Data Structures and Algorithms", "1-D Dynamic Programming"]
---

## 문제
---
[Climbing Stairs](https://neetcode.io/problems/climbing-stairs/question)

## 내용
---
계단을 한 번 또는 두 번 올라 목표로 하는 계단 n에 도달하는 경우의 수를 구하는 문제입니다.

## 해결방법
---
### **[1] DP(Bottom-Up) — Tabulation & Iteration**
n=5 계단에 가는 것을 목표라고 한다면 5층에 도달하는 모든 방법은 한 걸음 두 걸음(1칸 또는 2칸)에 의해 두 그룹으로 나누어진다고 생각할 수 있습니다.<br>  

마지막 1칸을 올라왔다면 반드시 4층에서 출발을 했을 것이고, 마지막 2칸을 올라왔다면 반드시 3층에서 출발 했을 것입니다. 그렇게 생각했을 때, 결국 5층까지 가는 경우의 수는 

> ***[3층까지 도달하는 모든 경우의 수] + [4층까지 도달하는 모든 경우의 수]***  

계산이 필요하게 됩니다. 이를 아래와 같이 점화식으로 표현할 수 있습니다.

> ***dp[i] = dp[i - 2] + dp[i - 1]***  

5층에 도달하기 위해 dp[5]를 구해야 합니다. 점화식에 의해, dp[5]는 dp[4]와 dp[3]에 의존하고 이 값들은 dp[2]와 dp[1]에 의존합니다. 따라서 dp[1] → dp[2] → dp[3] → dp[4] → dp[5] 순서대로 계산해 결과값을 얻을 수 있습니다.


```python
# Input: n = 5
# Output: 8

def climb_stairs(n):
    # n이 1 또는 2인 경우는 경우의 수가 n과 일치하므로 그대로 반환
    if n <= 2:
        return n

    # dp[i] = i번째 계단까지 도달하는 경우의 수
    dp = [0] * (n + 1)

    # 초기 조건(Base cases):
    # 1층: 1가지(1칸)
    # 2층: 2가지(1+1칸, 2칸)
    dp[1], dp[2] = 1, 2

    # 3층부터 n층까지 bottom-up 방식으로 테이블 채우기
    # 점화식: dp[i] = dp[i-2] + dp[i-1]
    for i in range(3, n + 1):
        dp[i] = dp[i - 2] + dp[i - 1]

    # 최정적으로 dp[n]이 구하고 싶은 값
    return dp[i]

# Time Complexity: O(n)
# Space Complexity: O(n)
```
![image](https://github.com/user-attachments/assets/a101229e-587c-4c13-84f7-38f9fc9bf9b3)
<br><br>

### **[2] DP(Space-Optimized Bottom-Up)**
이 경우는 Bottom-up tabulation을 dp배열을 굳이 생성하지 않고 변수 2개로 최적화하여 풀어낸 방법입니다. 사실 코드상으로 보기엔 가장 간단하고 최적화된 방법입니다.<br>  

```python
def climb_stairs(n):
    # one: 0층 -> dp[0]
    # two: 1층 -> dp[1]
    one, two = 1, 1

    # dp[2], dp[3], dp[4], dp[5] 대응되는 계산
    for i in range(n - 1):
        temp = one
        one = one + two
        two = temp

    return one

# Time Complexity: O(n)
# Space Complexity: O(1)
```
[1],[2] 해결 방법들을 보면 피보나치 수열의 진행, 계산 방식과 동일함을 알 수 있습니다. 피보나치 수열의 계산은 첫 번째 두 번째가 1로 세팅이 되는 것을 떠올린다면, 이 해결방법 또한 초기 두 수의 세팅을 통해 결과값을 계산해낼 수 있음을 알 수 있습니다.  
<img src="https://github.com/user-attachments/assets/aaa0fb00-b021-48d6-ba9e-f4ccdeef4232" alt="Alt Text" width="400">

### **[3] DP(Top-Down) — Memoization & Recuresion**
```python
# Input: n = 5
# Output: 8

def climb_stairs(n):
	cache = [-1] * (n + 1)
	
	def dfs(i):
		if i >= n:
			return i == n
		if cache[i] != -1:
			return cache[i]
		cache[i] = dfs(i + 1) + dfs(i + 2)
		return cache[i]

	return dfs(0)

# Time: O(n)
# Space: O(n)
```
<img src="https://github.com/user-attachments/assets/4a616157-5113-497d-ba62-ac87c637fdff" alt="Alt Text" width="450"><br><br>
<br><br>

## 참고사항
---
### Q. Top-down 방식도 dfs(0), dfs(1), dfs(2)... 이런식으로 진행되면 결국 Bottom-up 방식 아닌가요?  
> 재귀에는 **호출방향(call direction)** 그리고 **값이 계산되는 반환 방향(return direction)** 이 있습니다.  

>비록 Top-down, memoization 방식의 반환 결과가 Bottom-up처럼 보이지만 호출 자체는 '큰 문제 ➡ 작은 문제' 방식이기 때문에 이 알고리즘은 Top-down memoization 방식으로 분류됩니다. 호출 방향을 기준으로 합니다.