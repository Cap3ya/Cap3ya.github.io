#!/bin/bash

# Purpose:
#	Don't remove files,
#	Bin them first !

# Variables:
	bin=~/Bin # Bin Directroy 
	fil="${1}"
# Main:

mv $fil $bin

exit 0
