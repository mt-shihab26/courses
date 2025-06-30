class Person:
    def __init__(self, name: str, year_of_birth: int, ht_inches: int = None):
        self.__name = name
        self.__year_of_birth = year_of_birth
        self.__ht_inches = ht_inches

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
               f"Height: {self.__ht_inches if self.__ht_inches is not None else 'Invalid'}"


persons = (
    Person("Zulkarnine", 1990, 72),
    Person("Foo", 1980),
    Person("Bar", 1993),
    Person("Baz", 2020, 80),
    Person("Ban", 1945),
    Person("Ben", 1980, 72)
)

for person in persons:
    if person.get_year_of_birth() >= 1990:
        print(person)
