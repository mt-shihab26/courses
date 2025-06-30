# Two type of Variable in Python
# 1. Instance variable
# 2. Class(Static) variable

class Car:
    wheels = 4

    def __init__(self):
        self.mil = 10
        self.com = "BMW"


c1 = Car()
c2 = Car()

c1.mil = 8

Car.wheels = 5

print(c1.mil, c1.com, c1.wheels)
print(c2.mil, c1.com, c2.wheels)
