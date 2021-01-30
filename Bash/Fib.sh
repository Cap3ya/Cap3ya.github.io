#!/bin/bash

# Print Some Fibonaccies 

MAX=100 # Stop @ MAX

a=0; b=1; c=$(( $a + $b ))
while [ $a -lt $MAX ]
do
	a=$b
	b=$c
	c=$(( $a + $b ))
	printf "$a\n"
done

exit 0
