#!/bin/bash 

# Purpose:
	# Assemble then Link Source Code into Assembly.

# Arguments:
	Number_of_expected_args=1
	Source="${1}"
	
	E_WRONG_ARGS=85
	script_args='<Source_File>'

	if [ $# -ne $Number_of_expected_args ]
		then
			echo "Usage: `basename $0` $script_args"
			exit $E_WRONG_ARGS
	fi

# Main: 
	as $1.s -o $1.o 	|| exit 5 \
	&& ld $1.o -o $1 	|| exit 4 \
	&& rm $1.o 		|| exit 3 \
	&& mkdir $1 		|| exit 2 \
	&& mv $1.s $1 $1/ 	|| exit 1

# Exit:
	exit 0

