def greet():
    print("Hello")
    print("How do you do?")

def greet2(name):
    print("hello", name)
    print("How do you do?")

def add_numbers(n1, n2):
    result = n1 + n2
    return result


greet()
greet()
greet()
# greet2("Jack")

rs = add_numbers(6.7, 5.4)
print(rs)
