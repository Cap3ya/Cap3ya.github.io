#!/bin/bash

# Time Management: 1/n, Break study time down among n modules.

#Arguments
	Number_of_expected_args=2
	hrs="${1}" # Number of Study hours
	mod="${2}" # Number of Modules

#Errors
	E_WRONG_ARGS=85
	script_args='<Hour(s)> <Module(s)>'
	
	if [ $# -ne $Number_of_expected_args ]
		then
			echo "Usage: `basename $0` $script_args"
			exit $E_WRONG_ARGS
	fi

#Main
	mnt=$(( $hrs * 60 / $mod )) # Time per module in minute
	
	echo "You are going to study $mod modules for $hrs hours, or $mnt minutes per unit"
	
	for MODULE in `seq 1 $mod` # Print current module
	do
		echo -en "Press ENTER, start: `date +%H:%M`, end: `date +%H:%M -d "+ $mnt minutes"`."$'\r'
		read -s

		i=$mnt
		while [ $i -gt 0 ] # Print minutes remaining
			do
			printf "Unit $mod: %s minute(s) left                 \r" "$i"
			sleep 60
			i=$(($i-1))
		done
	done
#Exit
	exit 0

#To Do
#	Add Pause feature
#	Add Progress Bar 
#	Add of Session 
