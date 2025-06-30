a = 5
b = 0

try:
    print("Resource Open")
    print(a / b)
except Exception as e:
    print("Hey, You cannot divide a Number by Zero:", e)
finally:
    print("Resource Closed")
