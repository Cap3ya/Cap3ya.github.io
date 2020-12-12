#!/bin/bash
dns=$1
paths=paths.txt
files=$2
translations=translations.txt

for translation in $(cat $translations)
	do
		for path in $(cat $paths)
		do
			data=$(echo $dns$path$file | sed $translation)
			curl --silent --head $data | grep -E '\<200>\' > /dev/null \
			       && curl --inclue $dns$path$file 2> /dev/null
		done
	done

exit 0
