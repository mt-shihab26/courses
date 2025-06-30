def add_sub(x, y):
    c = x + y
    d = x - y
    return c, d

result1, result2 = add_sub(5, 4)

print(result1, result2)

def add_sub_mul(x, y):
    return x+y, x-y, x*y

print(add_sub_mul(5, 4))
