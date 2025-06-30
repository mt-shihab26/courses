class Person:
    def __init__(self, name: str, year_of_birth: int, email: str, ht_inches: int = None):
        self.__name = name
        self.__year_of_birth = int(year_of_birth)
        self.__ht_inches = ht_inches
        self.__email = email

    def get_year_of_birth(self):
        return self.__year_of_birth

    def type_of_dob(self):
        return type(self.__year_of_birth)

    def get_name(self):
        return self.__name

    def set_name(self, name):
        self.__name = name

    def __str__(self):
        return f"Name: {self.__name}, " \
               f"Date of Birth: {self.__year_of_birth}, " \
               f"Height: {self.__ht_inches if self.__ht_inches is not None else 'Invalid'}, " \
               f"Email: {self.__email}"


class Student(Person):
    def __init__(self, name: str, year_of_birth: int, email: str, student_id: str):
        super().__init__(name, year_of_birth, email)
        self.__id = student_id

    def __str__(self):
        return super().__str__() + f", ID: {self.__id}"

    def __repr__(self):
        return self.__str__()


class Teacher(Person):
    def __init__(self, name: str, year_of_birth: int, email: str, department: str):
        super().__init__(name, year_of_birth, email)
        self.__department = department

    def __str__(self):
        return super().__str__() + f", Department: {self.__department}"

    def __repr__(self):
        return super().__str__()


# shihab = Student("aslfsdkj", 2002, "234kjjasdfk", "shihab4t@gmail.com")
# print(shihab)
# shihab.set_name("Shihab Mahamud")
# print(shihab)


new_persons_list = (
    Person("Zulkarnine", 1990, "zulkarnine@gmail.com"),
    Student("S", 2000, "s@gmail.com", "234sakdf"),
    Teacher("T", 1980, "t@gmail.com", "kjjf23443")
)

for person in new_persons_list:
    print(person)
