class Computer:
    def __init__(self):
        self.name = "Shihab"
        self.age = 18

    def compare(self, other):
        return self.age == other.age


c1 = Computer()
c1.age = 30
c2 = Computer()

c1.name = "Rashi"

if c1.compare(c2):
    print("They are same")
else:
    print("They are not same")
