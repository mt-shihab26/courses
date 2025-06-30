class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no
        self.lap = self.Laptop()

    def show(self):
        print(self.name, self.roll_no)

    class Laptop:
        def __init__(self):
            self.brand = "HP"
            self.cpu = "i5"
            self.ram = 8

        def show(self):
            print(self.brand, self.cpu)


s1 = Student("Navin", 2)
s2 = Student("Jenny", 3)

s1.show()
s1.lap.show()

lap1 = Student.Laptop()

lap1.show()

