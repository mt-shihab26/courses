# def fibonacii(n):
#     if (n <= 1):
#         return n
#     return fibonacii(n-1) + fibonacii(n-2)


# print(fibonacii(0), end=" ")
# print(fibonacii(1), end=" ")
# print(fibonacii(2), end=" ")
# print(fibonacii(3), end=" ")
# print(fibonacii(4), end=" ")
# print(fibonacii(5), end=" ")



def fib(len):
    fb = [0, 1]
    for i in range(2, len):
        fb.append(fb[i-1] + fb[i-2])
    return fb

print(fib(20))
