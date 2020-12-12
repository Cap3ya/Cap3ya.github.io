#!/bin/bash
dns=$1
paths=paths.txt
file=$2
translations=translations.txt

for translation in $(cat $translations)
	do
		for path in $(cat $paths)
		do
			data="--silent --head $dns$path$file"
			curl $(echo $data | sed $translation) | tac | tac | grep -E '\\<200>\\' > /dev/null \
			       && curl --inclue $dns$path$file 2> /dev/null
		done
	done

exit 0
