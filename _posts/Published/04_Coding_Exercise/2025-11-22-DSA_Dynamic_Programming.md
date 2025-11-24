---
title: Dynamic Programming, 동적 프로그래밍
description: 작은 문제 결과를 저장해 큰 문제 해결하기
author: yebon
date: 2025-11-24
categories: ["Data Structures and Algorithms"]
tags: ["Data Structures and Algorithms", "Dynamic Programming"]

---

## 정의
---
하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용하는 문제해결 패러다임이며, '기억하며 풀기'라는 더욱 직관적 용어로 소개되기도 합니다.  

## 사용이유
---
일반적인 재귀, BFS, DFS를 사용하는 것은 동일한 작은 문제들이 여러 번 반복되는 비효율적 계산이 될 수 있습니다. 하지만 DP를 사용하면 반복되는 부분들을 기억(저장, 메모)하여 효율적으로 문제를 해결할 수 있도록 도와줍니다.

## 사용조건
---
**Overlapping Subproblems (겹치는 부분 문제)**  
: 동일한 작은 문제들의 반복해서 나타나는 경우
<br>

**Optimal Substructure (최적 부분 구조)**  
: 부분 문제의 최적 결과값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우

## 구현방법
---

| Bottom-Up                    | Top-Down          	
| :--------------------------- | :--------------- 
| Tabulation 방식         		| Memoization 방식 사용     
| Iteration 사용                | Recursion 사용    

## 참고사항
---
**Divide and Conquer(분할정복)와의 차이점**  
: 분할 정복은 분할된 하위 문제가 동일하게 중복이 일어나지 않는 경우에 쓰이며, 동일한 중복이 일어나면 DP를 사용합니다.  

## 대표문제
---
Bottom-up 예시  
: **Fibonacchi 수열 --- Optimized Bottom-up**  

```python
# Input: n = 6
# Output: 8
	
def fibonacci(n):
	# Base Cases
	if n <=1:
		return n
		
		# dp[i] = i번째 피보나치 수
		dp = [0] * (n + 1)
		dp[0] = 0
		dp[1] = 1

		# Bottom-up tabulation
		for i in range(2, n + 1):
			dp[i] = dp[i - 1] + dp[i - 2]
		
		return dp[n]

# Time : O(n)
# Space: O(n)
```
  
Top-down 예시  
: **Climbing Stairs** 

```python
# Input: n = 3
# Output: 3

def climb_stairs(n):
	cache = [-1] * 
	
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