import pytest
from app import calc


@pytest.mark.parametrize(
    "num1, num2, expected",
    [
        (3, 5, 8),
        (5, 8, 13),
        (12, 4, 16)
    ]
)
def test_add(num1, num2, expected):
    assert calc.add(num1, num2) == expected


def test_sub():
    assert calc.sub(9, 5) == 4


def test_mul():
    assert calc.mul(4, 3) == 12


def test_div():
    assert calc.div(8, 2) == 4


# def test_bank_set_initial_amount():
#     bank_account = calc.BankAccount(50)
#     assert bank_account.balance == 50


# def test_bank_default_amount():
#     bank_account = calc.BankAccount()
#     assert bank_account.balance == 0


# def test_withdraw():
#     bank_account = calc.BankAccount(50)
#     bank_account.withdraw(20)
#     assert bank_account.balance == 30


# def test_deposit():
#     bank_account = calc.BankAccount(50)
#     bank_account.deposit(30)
#     assert bank_account.balance == 80


# def test_collect_interest():
#     bank_account = calc.BankAccount(50)
#     bank_account.collect_interest()
#     assert round(bank_account.balance, 6) == 55


@pytest.fixture
def zero_bank_account():
    print("From fixture")
    return calc.BankAccount()


@pytest.fixture
def bank_account():
    return calc.BankAccount(50)


def test_bank_set_initial_amount(bank_account):
    assert bank_account.balance == 50


def test_bank_default_amount(zero_bank_account):
    print("Insite test code")
    assert zero_bank_account.balance == 0


def test_withdraw():
    bank_account = calc.BankAccount(50)
    bank_account.withdraw(20)
    assert bank_account.balance == 30


def test_deposit():
    bank_account = calc.BankAccount(50)
    bank_account.deposit(30)
    assert bank_account.balance == 80


def test_collect_interest():
    bank_account = calc.BankAccount(50)
    bank_account.collect_interest()
    assert round(bank_account.balance, 6) == 55


@pytest.mark.parametrize(
    "deposit, withdrew, expected",
    [
        (200, 100, 100),
        (50, 10, 40),
        (1200, 200, 1000)
    ]
)
def test_bank_transaction(zero_bank_account, deposit, withdrew, expected):
    zero_bank_account.deposit(deposit)
    zero_bank_account.withdraw(withdrew)
    assert zero_bank_account.balance == expected


def test_insifficiant_funds(zero_bank_account):
    with pytest.raises(calc.InsifficiantFunds):
        zero_bank_account.withdraw(100)
