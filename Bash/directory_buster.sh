#!/bin/bash

# trying to build a kind of dirbuster - Brute force directory discovery. 
directory_buster () {

domaine_name_service="${1}"
dictionary_path="${2}"

dictionary_length=$(wc -l < $dictionary_path)

i=0;	while [ $i -lt $dictionary_length ];
	do 
	i=$[$i+1];
	directory=$(sed "${i}q;d" "$dictionary_path"); # get a directory name from a  dictionary
	curl -Is www.$domaine_name_service/$directory -L | grep "200 OK"; # check if server is up
		if [ $(echo $?) -eq 0 ]; # if server is up 
		then echo "www.$domaine_name_service/$directory" >> ~/directory_buster.txt; # then note it down 
		else echo $(($dictionary_length-$i)) "$domaine_name_service/$directory" # else trash it
		fi
	done
}

directory_buster "$1" "$2"

exit 
