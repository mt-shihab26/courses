class Person:
    def __init__(self, name, date_of_birth, height):
        self.name = name
        self.date_of_birth = date_of_birth
        self.height = height

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    def __str__(self):
        return f"Name: {self.name}, " \
               f"Date of Birth: {self.date_of_birth}, " \
               f"Height: {self.height}"


shihab = Person("Shihab", 2002, "5.3 Feet")
saimon = Person("Saimon", 2003, "5.4 Feet")

print(shihab)
print(saimon)

shihab.set_name("Shihab Mahamud")

print(shihab)

