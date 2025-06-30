marks = int(input("What is you marks in Math: "))


def show_grade(grade):
    print(f"You got: {grade}")


if marks >= 80:
    show_grade("A+")
elif marks >= 70:
    show_grade("A")
elif marks >= 60:
    show_grade("A-")
elif marks >= 50:
    show_grade("B")
elif marks >= 40:
    show_grade("C")
else:
    show_grade("F")

if marks > 80 or marks < 10:
    print("You are very good or very bad")
    if marks > 80:
        print("Excellent")
    else:
        print("Not so good")
else:
    print("You are okay")
