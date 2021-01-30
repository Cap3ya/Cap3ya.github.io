#!/bin/python 

# Print Some Fibonaccies 

a, b, MAX = 0, 1, 100
while a < MAX:
    a, b = b, a+b
    print(a)

exit()
