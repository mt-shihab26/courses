def sm(a=None, b=None, c=None):
    if a is not None and a is not None and c is not None:
        return a + b + c
    if a is not None and b is not None:
        return a + b
    if a is not None:
        return a
    return None


print(sm())
print(sm(5))
print(sm(5, 6))
print(sm(5, 6, 7))
