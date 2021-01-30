#!/bin/bash

email_harvest () {

value1="${1}"
value11=emails.$value1
value2="${2}"
	
wget -q -r -l 5 -O $value1 $value2
grep -E -o -a "\b[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+\b" < $value1 > $value11
rm $value1
cat $value11
}

email_harvest "$1" "$2"

exit

