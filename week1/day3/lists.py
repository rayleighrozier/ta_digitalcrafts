students = ["Amanda" , "Andrea" , "Blake", "Carlos", "Ethan", "Jason", "Olivia" , "Rahmin" , "Stacy" , "West"]
students = students + ["Bob"]
print(students)

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]

for item in list3:
    if item == 20:
        list3[list3.index(item)]= 200
        break

print(list3)