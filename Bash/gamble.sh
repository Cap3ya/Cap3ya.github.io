#!/bin/bash

until [[ $ite -gt 0 && $odd -gt 1 ]]; do
	echo -n "Number of iterations: " && read ite
	echo -n "What are your odds ? " && read odd
done

for ((i=0; i < "$ite"; i++)); do
	[[ $RANDOM -lt $(( 8**5 / "$odd" )) ]] && printf "WON\n" || printf "LOST\n"
done

exit 0


