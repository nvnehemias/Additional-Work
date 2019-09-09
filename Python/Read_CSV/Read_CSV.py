import os
import csv

csvpath = os.path.join('07_Resources','accounting.csv')

with open(csvpath,newline='') as csvfile:

    csvreader = csv.reader(csvfile,delimiter=",")
    print(csvreader)

    csv_header = next(csvreader)
    print(f'CSV Header:{csv_header}')

    for row in csvreader:
        print(row)
