dt = {"shihab": "programmer", "mahinur": "graphic designer", "jion": "civil engineer"}

for i in dt:
    print(i, end=" ")
print()


for pro in dt.values():
    print(pro, end=" ")
print("\n")

for i, pro in dt.items():
    print(i,": ", pro)
print()