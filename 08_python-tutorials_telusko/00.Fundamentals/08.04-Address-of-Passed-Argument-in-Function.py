
def update(x):
    print(id(x))

    x = 8
    print(id(x))
    print("x", x)

x = 10
print(id(x))
update(x)
print("x", x)


# list

def update_list(lst):
    print("inside function:", id(lst))
    lst[1] = 25
    print("inside function:", id(lst))
    print("inside function:", lst)

lst = [10, 20 ,30]
print("Outside:", id(lst))
update_list(lst)
print("Outside:", lst)
