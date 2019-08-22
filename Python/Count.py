#Given a list in Python and a number x, count number of occurrences of x in the given list.

#Here we have a list of random numbers
list_1 = [15, 6, 7, 10, 12, 20, 10, 28, 10, 10, 5, 3, 0, 2, 16, 10, 3, 11, 17]

#As the user for a number
chosen = int(input("What number would you like to choose? "))

#The count variable will keep count of number of times chose is in our list
count = 0

#for loop that runs through the entire list
for i in range(len(list_1)):
    if list_1[i] == chosen:
        count = count + 1
print("---------------------------------------------------------------")
print(f'Your chosen number {chosen} appears {count} times in our list.')
print("---------------------------------------------------------------")
