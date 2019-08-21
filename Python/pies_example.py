#set initial variable
answer = 'yes'
#Pie list 
list_pies = ['Pecan', 'Apple Crsip','Bean','Banoffee','Black Bun','Blueberry','Buko','Burek','Tamale','Steak']
ordered_pies = []

#Begin a while list
while answer == 'yes':

    #Show the list of pies that the customer can choose from
    print("------------------------------------------------------------------------")
    print('(1) Pecan', '(2) Apple Crsip','(3) Bean','(4) Banoffee','(5) Black Bun',
            '(6) Blueberry','(7) Buko','(8) Burek','(9) Tamale','(10) Steak')
    #Select the pie and add this to the ordered_pies list
    pie_choice  = int(input("Please select a number between 1 and 10. Answer: "))
    pie = list_pies[pie_choice-1]
    ordered_pies.append(list_pies[pie_choice-1])
    #Ask if the customer would like to order another pie
    print("------------------------------------------------------------------------")
    print(f"Great! We'll have that {pie} right out for you")
    answer = input("Would you like to make another order? 'yes' or 'no' ")

print("------------------------------------------------------------------------")
#Print the total amount of orders that was placed
print("Here is the total amount of orders you places: ")
print(len(ordered_pies))

