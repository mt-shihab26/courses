def is_even(number):
    if number % 2 == 0:
        return True
    return False


even_number = []
user_input = int(input("Limit: "))

for num in range(0, user_input):
    if is_even(num):
        even_number.append(num)

print(f"Even numbers: {even_number}")
