a = 5
b = 2

try:
    print("resource Open")
    print(a / b)
    k = int(input("Enter a number: "))
    print(k)
except ZeroDivisionError as e:
    print(e)
except ValueError as e:
    print(e)
except Exception as e:
    print("Something went wrong")
