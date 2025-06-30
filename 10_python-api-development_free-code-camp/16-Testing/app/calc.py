def add(num1: int, num2: int):
    return num1 + num2


def sub(num1: int, num2: int):
    return num1 - num2


def mul(num1: int, num2: int):
    return num1 * num2


def div(num1: int, num2: int):
    return num1 / num2


class InsifficiantFunds(Exception):
    pass


class BankAccount():
    def __init__(self, starting_balance=0):
        self.balance = starting_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsifficiantFunds("Insifficiant funds in account")
        self.balance -= amount

    def collect_interest(self):
        self.balance *= 1.1
