grocery = ["rice", "water", "tomato", "onion", "ginger"]

for item in grocery:
    if item == "water":
        continue
    if item == "onion":
        break
    print(item)
