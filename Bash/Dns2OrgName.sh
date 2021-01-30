#!/bin/bash

for DNS in `cat $1` #Read DNS from File
do
echo -e "Dns ::: $DNS" #Print the DNS
whois $(host $DNS | grep -Eo "([0-9]{1,3}[\.]){3}[0-9]{1,3}") | grep "org-name" #Print the Organisation Name
done

exit
