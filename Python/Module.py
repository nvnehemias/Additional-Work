# Write a program which will find all such numbers which are divisible by 7 but are not a multiple of 5,
# between 2000 and 3200 (both included).
# The numbers obtained should be printed in a comma-separated sequence on a single line.

#Set the range 
x = range(2000,3201,1)

#Create new list and a list comprehension
list_x = []
list_range = [list_x.append(n) for n in x]

#New list and a for loop
new_list = []
for i in list_x:
    if i%7 == 0 and i%5 != 0:
        new_list.append(str(i))

print(','.join(new_list))

