# Write a program which takes 2 digits, X,Y as input and generates a 2-dimensional array. 
# The element value in the i-th row and j-th column of the array should be i*j.
# Note: i=0,1.., X-1; j=0,1,¡­Y-1.
# Example
# Suppose the following inputs are given to the program:
# 3,5
# Then, the output of the program should be:
# [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8]]


#Ask the user for numbers that will be used for colums and rows
first_number = int(input("Please select a number for your rows: "))
second_number = int(input("Please select another number for your columns: "))

#Set y = 0 to serve as counter
y = 0

#create a function that inputs the first list of zeros length of second_number
def zerolistmaker(n):
    listofzeros = [0] * n
    return listofzeros

#create the list that will be outputted
row_list = [zerolistmaker(second_number)]

#for loop that outputs the lists
for i in range(first_number-1):
    column_list = [0]
    y += 1
    x = y
    for j in range(second_number-1):
        column_list.append(x)
        x += y
    row_list.append(column_list)
    
#Print the final solution  
print(row_list)


