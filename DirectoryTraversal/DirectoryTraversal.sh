#!/bin/bash
dns="${1}"
paths=paths.txt
file="${2}"
translations=translations.txt

for translation in $(cat $translations)
	do
		for path in $(cat $paths)
		do
			data=$(echo $dns$path$file | sed $translation)
			echo $data
			curl --include $data |& grep -E '\<200\>' > /dev/null && curl --include $dns$path$file | less
		done
	done
exit 0
