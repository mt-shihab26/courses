def fact(n):
    f = 1
    for i in range(1, n+1):
        f *= i
    return f

print(fact(5))


def fact_re(n):
    if n == 1:
        return 1
    return fact_re(n-1) * n

print(fact_re(5))
