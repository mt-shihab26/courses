from math import sqrt


def is_prime(number):
    if number <= 1:
        return False
    if number == 2:
        return True
    if number % 2 == 0:
        return False
    for ith in range(3, int(sqrt(number) + 1), 2):
        if number % ith == 0:
            return False
    return True


for i in range(1, 10000000000):
    if is_prime(i):
        print(i, end=" ")
