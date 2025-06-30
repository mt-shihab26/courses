a = '5'
b = '8'

c = str("hello")
print(c)

# print(a.__add__(b))  # Magic Methods


class Student:
    def __init__(self, m1, m2):
        self.m1 = m1
        self.m2 = m2

    def __add__(self, other):
        return Student(self.m1 + other.m1, self.m2 + other.m2)

    def __str__(self):
        return f"%% {self.m1}, {self.m2} %%"


s1 = Student(58, 69)
s2 = Student(60, 65)

s3 = s1 + s2

print(s3)
